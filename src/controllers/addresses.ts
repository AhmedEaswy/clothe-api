import express, { Request, Response } from 'express';
import Address from "../models/address";

const index = async (_req: Request, res: Response) => {
    try {
        const addresses = await Address.findAll();
        res.status(200).json({
            data: addresses
        });
    } catch (err) {
        res.status(400).json({ error: `${err}` });
    }
}

const show = async (_req: Request, res: Response) => {
    try {
        const addresses = await Address.findAll({
            where: {
                userId: _req.params.id
            }
        });
        res.status(200).json({
            data: addresses
        });
    } catch (err) {
        res.status(400).json({ error: `${err}` });
    }
}

const create = async (_req: Request, res: Response) => {
    try {
        const address = await Address.create({
            userId: _req.body.userId,
            address: _req.body.address,
            phone: _req.body.phone,
            notes: _req.body.notes,
        });
        res.status(200).json({
            data: address
        });
    } catch (err) {
        res.status(400).json({ error: `${err}` });
    }
}


const update = async (_req: Request, res: Response) => {
    try {
        const address = await Address.update({
            address: _req.body.address,
            phone: _req.body.phone,
            notes: _req.body.notes,
        },{
            where: {
                userId: _req.params.id
            }
        });
        res.json({
            data: address
        })
    } catch (err) {
        console.log(err)
    }
}

const destroy = async (_req: Request, res: Response) => {
    try {
        const address = await Address.destroy({
            where: {
                id: _req.params.id
            }
        })
        res.json({
            msg: `Address ${_req.params.id} deleted`
        })
    } catch (err) {
        res.json({
            error: err
        })
    }
}

const addresses_routes = (app: express.Application) => {
    // addresses routes resources
    app.get('/addresses/:id', show)
    app.post('/addresses', create)
    app.get('/addresses', index)
    app.put('/addresses/:id', update)
    app.delete('/addresses/:id', destroy)
}

export default addresses_routes;
