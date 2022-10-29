//
// import Client from '../database'
//
// export type Color = {
//     id?: string
//     name: string
//     value: string,
// }
//
// export class ColorsStore {
//     async index(): Promise<Color[]> {
//         try {
//             const conn = await Client.connect()
//             const sql = 'SELECT * FROM colors'
//             const result = await conn.query(sql)
//             conn.release()
//             return result.rows
//         } catch (err) {
//             throw new Error(`Can not connect to colors ${err}`)
//         }
//     }
//
//     async show(id: string): Promise<Color> {
//         try {
//             const sql = 'SELECT * FROM colors WHERE id=($1)'
//             const conn = await Client.connect()
//             const result = await conn.query(sql, [id])
//             conn.release()
//             return result.rows[0]
//         } catch (err) {
//             throw new Error(`Can not show to colors on id: ${id} ${err}`)
//         }
//     }
//
//     async create(color: Color): Promise<Color> {
//         try {
//             const sql =
//                 'INSERT INTO colors (name, value) VALUES($1, $2) RETURNING *'
//             const conn = await Client.connect()
//             const result = await conn.query(sql, [
//                 color.name,
//                 color.value,
//             ])
//             conn.release()
//             return result.rows[0]
//         } catch (err) {
//             throw new Error(
//                 `Can not create to colors on id: ${color} ${err}`
//             )
//         }
//     }
//
//     async update(color: Color): Promise<Color> {
//         try {
//             const sql =
//                 `UPDATE colors SET name = $1, value = $2 WHERE id = ($3);`
//             const conn = await Client.connect()
//             const result = await conn.query(sql, [
//                 color.name,
//                 color.value,
//                 color.id
//             ])
//             conn.release()
//             console.log(result.rows[0])
//             return result.rows[0]
//         } catch (err) {
//             throw new Error(
//                 `Can not update to colors on id: ${color} ${err}`
//             )
//         }
//     }
//
//     async delete(id: string): Promise<Color> {
//         try {
//             const sql = 'DELETE FROM colors WHERE id=($1)'
//             const conn = await Client.connect()
//             const result = await conn.query(sql, [id])
//             conn.release()
//             return result.rows[0]
//         } catch (err) {
//             throw new Error(`Can not delete to colors on id: ${id} ${err}`)
//         }
//     }
// }
