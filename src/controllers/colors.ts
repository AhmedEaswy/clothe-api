import express, { Request, Response } from 'express';
import Color from "../models/color";
// import { verifyAuthToken } from '../middleware/auth'

const index = async (_req: Request, res: Response) => {
    try {
        const colors = await Color.findAll();
        res.status(200).json({
            data: colors
        });
    } catch (err) {
        res.status(400).json({ error: `${err}` });
    }
}
const show = async (_req: Request, res: Response) => {
    try {
        console.log(_req.body.id)
        const color = await Color.findAll({
            where: {
                id: _req.params.id
            }
        });
        res.status(200).json({
            data: color ? color[0] : 'No color found'
        });
    } catch (err) {
        res.status(400).json({ error: `${err}` });
    }
}

const create = async (_req: Request, res: Response) => {
    try {
        const color = await Color.create({
            name: _req.body.name,
            value: _req.body.value
        });
        res.status(200).json({
            data: color
        });
    } catch (err) {
        res.status(400).json({ error: `${err}` });
    }
}


const update = async (_req: Request, res: Response) => {
    try {
        const color = await Color.update({
            name: _req.body.name,
            value: _req.body.value,
        },{
            where: {
                id: _req.params.id
            }
        });
        res.json({
            data: color
        })
    } catch (err) {
        console.log(err)
    }
}

const destroy = async (_req: Request, res: Response) => {
    try {
        const color = await Color.destroy({
            where: {
                id: _req.params.id
            }
        })
        res.json({
            msg: `Color ${_req.params.id} deleted`
        })
    } catch (err) {
        res.json({
            error: err
        })
    }
}

const colors_routes = (app: express.Application) => {
    // colors routes resources
    app.get('/colors', index)
    app.get('/colors/:id', show)
    app.post('/colors', create)
    app.put('/colors/:id', update)
    app.delete('/colors/:id', destroy)
}

export default colors_routes;
