import jwt, {JwtPayload} from "jsonwebtoken";
import {NextFunction, Request, Response} from "express";
const secret = process.env.TOKEN_SECRET || 'secret'

export const verifyToken = async (authorizationHeader: string) => {
    try {
        const token: string = authorizationHeader ? authorizationHeader.split(' ')[1] : '';
        const user = await jwt.verify(token, secret) as JwtPayload
        return user;
    } catch (err) {
        throw new Error(`Invalid token ${err}`)
        return new Error(`${err}`)
    }
}

export const VerifyUserOrderMine = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const authorizationHeader: string = req.headers.authorization || '';
        const user = await verifyToken(authorizationHeader);
        const user_id = req.params.id;
        console.log(user)
        console.log(user_id)
        // if (user.id == user_id) {
        //     next()
        // } else {
        //     res.status(401).json({msg: 'user id dose not match'})
        // }
    } catch (err) {
        res.status(401).json({msg: `${err}`})
    }
}

export const VerifyUserIsMe = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const authorizationHeader: string = req.headers.authorization || '';
        const user_id = (await verifyToken(authorizationHeader));
        console.log('user_id', user_id)
        console.log(req.params.id)
        // if (user_id == req.params.id) {
        //     next()
        // } else {
        //     res.status(401).json({msg: 'user id dose not match'})
        // }
    } catch (error) {
        res.status(401).json('unauthorized')
    }
}

// export const verifyAuthToken = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const authorizationHeader = req.headers.authorization
//         const token: string = authorizationHeader ? authorizationHeader.split(' ')[1] : '';
//         const decoded = jwt.verify(token, secret)
//         next()
//     } catch (error) {
//         res.status(401).json('unauthorized')
//     }
// }

