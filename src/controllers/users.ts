import express, { Request, Response, NextFunction } from 'express'
import jwt, {JwtPayload} from 'jsonwebtoken'
// import {UsersStore, UserTest, UserLogin} from "../models/user-test";
import { VerifyUserIsMe } from "../middleware/auth";
// const store = new UsersStore();
import User from '../models/user'
import Address from '../models/address'


const secret = process.env.TOKEN_SECRET || 'secret'

const index = async (_req: express.Request, res: express.Response) => {
    const users  = await User.findAll({ include: Address });
    try {
        res.json({
            data: users
        })
    } catch (err) {
        res.json({
            error: `${err}`
        })
    }
}

const show = async (_req: express.Request, res: express.Response) => {
    try {
        const id: string = _req.params.id
        const user  = await User.findAll({
            where: {
                id: _req.params.id
            },
            include: Address
        });
        res.json({
            data: user
        })
    } catch (err) {
        res.json({
            error: err
        })
    }
}

const create = async (req: Request, res: Response) => {
    try {
        const user = {
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            image: req.body.image,
            password: req.body.password,
        }
        const newUser = await User.create(user)
        const token = jwt.sign({ user: newUser }, secret,{ expiresIn: '1h' })
        res.json({
            user: newUser,
            token: token
        })
    } catch(error) {
        console.log(error)
        res.send(error)
    }
}

const update = async (req: Request, res: Response) => {
    try {
        const user = {
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            image: req.body.image,
        }
        const newUser = await User.update(user, { where: { id: req.params.id } })
        res.json({
            user: newUser,
        })
    } catch(error) {
        console.log(error)
        res.send(error)
    }
}

const destroy = async (req: Request, res: Response) => {
    try {
        const userId: string = req.params.id;
        await User.destroy({ where: { id: userId } })
        res.json({ msg: 'User deleted Successfully' })
    } catch (error) {
        res.status(422).json({
            error: `${error}`,
        })
    }
}

const auth = async (req: Request, res: Response) => {
    try {
        const userData = {
            email: req.body.email.toLowerCase(),
            password: req.body.password
        }
        const user = User.auth(userData)
            const token = jwt.sign({ user: user }, secret, { expiresIn: '1h' })
            res.json({
                user,
                token: token
            })
    } catch (err) {
        console.log(err)
        res.json(err)
    }
}

const authToken = async (req: Request, res: Response) => {
//     try {
//         const authorizationHeader = req.headers.authorization
//         const token: string = authorizationHeader ? authorizationHeader.split(' ')[1] : '';
//         let { user } = jwt.verify(token, secret) as JwtPayload
//         delete user.password;
//         res.json({
//             data: user
//         })
//     } catch (err) {
//         res.status(401).json('unauthorized')
//     }
}

// middleware to verify auth token


const users_routes = (app: express.Application) => {
    // users routes resources
    app.get('/users', index)
    app.get('/users/:id', VerifyUserIsMe, show)
    app.post('/register', create)
    // app.put('/users/:id', VerifyUserIsMe, update)
    app.delete('/users/:id', destroy)
    // // users auth routes
    app.post('/login', auth)
    // app.post('/auth', authToken)
}



export default users_routes;
