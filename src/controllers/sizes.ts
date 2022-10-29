// import express, { Request, Response } from 'express';
// import Size from "../models/size";
//
// const index = async (_req: Request, res: Response) => {
//     try {
//         const sizes = await Size.findAll();
//         res.status(200).json({
//             data: sizes
//         });
//     } catch (err) {
//         res.status(400).json({ error: `${err}` });
//     }
// }
// const show = async (_req: Request, res: Response) => {
//     try {
//         console.log(_req.body.id)
//         const size = await Size.findAll({
//             where: {
//                 id: _req.params.id
//             }
//         });
//         res.status(200).json({
//             data: size ? size[0] : 'No size found'
//         });
//     } catch (err) {
//         res.status(400).json({ error: `${err}` });
//     }
// }
//
// const create = async (_req: Request, res: Response) => {
//     try {
//         const size = await Size.create({
//             name: _req.body.name,
//             value: _req.body.value
//         });
//         res.status(200).json({
//             data: size
//         });
//     } catch (err) {
//         res.status(400).json({ error: `${err}` });
//     }
// }
//
//
// const update = async (_req: Request, res: Response) => {
//     try {
//         const size = await Size.update({
//             name: _req.body.name,
//             value: _req.body.value,
//         },{
//             where: {
//                 id: _req.params.id
//             }
//         });
//         res.json({
//             data: 'success'
//         })
//     } catch (err) {
//         console.log(err)
//     }
// }
//
// const destroy = async (_req: Request, res: Response) => {
//     try {
//         const size = await Size.destroy({
//             where: {
//                 id: _req.params.id
//             }
//         })
//         res.json({
//             msg: `Size ${_req.params.id} deleted`
//         })
//     } catch (err) {
//         res.json({
//             error: err
//         })
//     }
// }
//
// const sizes_routes = (app: express.Application) => {
//     // sizes routes resources
//     app.get('/sizes', index)
//     app.get('/sizes/:id', show)
//     app.post('/sizes', create)
//     app.put('/sizes/:id', update)
//     app.delete('/sizes/:id', destroy)
// }
//
// export default sizes_routes;
