// import Client from '../database'
// import format from 'pg-format';
//
// export type Product = {
//     id?: string
//     name: string
//     price: number,
//     color_id?: number,
//     colors?: any[],
//     created_at?: Date,
//     updated_at?: Date,
// }
//
// export class ProductsStore {
//     async index(): Promise<Product[]> {
//         try {
//             const conn = await Client.connect()
//             // const sql = 'SELECT products.id, products.name, products.created_at, products.price, colors.name AS color_name, colors.value AS color_value FROM products INNER JOIN product_colors on products.id = product_colors.product_id LEFT JOIN colors on product_colors.color_id = colors.id'
//             const sql = 'SELECT * FROM products'
//             const result = await conn.query(sql)
//
//             const sql_color =
//                 `
//                     SELECT *
//                     FROM product_colors
//                     INNER JOIN colors
//                     ON product_colors.color_id=colors.id
//                     AND product_colors.product_id=($1)
//                 `
//
//             let i = 0;
//             for await (const product of result.rows) {
//                 const result_color = await conn.query(sql_color, [product.id])
//                 result.rows[i].colors = result_color.rows
//                 i++;
//             }
//
//
//             conn.release()
//             // console.log(result_color.rows)
//
//
//             return result.rows
//         } catch (err) {
//             throw new Error(`Can not connect to products ${err}`)
//         }
//     }
//
//     async show(id: string): Promise<Product> {
//         try {
//             const sql = 'SELECT * FROM products WHERE id=($1)'
//             const conn = await Client.connect()
//             const result = await conn.query(sql, [id])
//             conn.release()
//             return result.rows[0]
//         } catch (err) {
//             throw new Error(`Can not show to products on id: ${id} ${err}`)
//         }
//     }
//
//     async create(product: Product): Promise<Product> {
//         try {
//             console.log(typeof product.price, product.price);
//             const sql = 'INSERT INTO products (name, price, created_at) VALUES ($1, $2, $3)';
//             const conn = await Client.connect()
//             const result = await conn.query(sql, [
//                 product.name,
//                 product.price,
//                 new Date()
//             ])
//             // const values: any[] = product.colors ? product.colors?.map((color: any) => [result.rows[0].id, color.id]) : []
//             // console.log(values)
//
//             // const sql_color = format('INSERT INTO product_colors (product_id, color_id) VALUES %L', values);
//             // const result_product_color = await conn.query(sql_color)
//             conn.release()
//             console.log(result.rows)
//             return result.rows[0]
//         } catch (err) {
//             throw new Error(
//                 `Can not create to products on id: ${product} ${err}`
//             )
//         }
//     }
//
//     async update(product: Product): Promise<Product> {
//         try {
//             const sql =
//                 `UPDATE products SET name = $1, price = $2, updated_at = $3 WHERE id = ($4);`
//             const conn = await Client.connect()
//             const result = await conn.query(sql, [
//                 product.name,
//                 product.price,
//                 new Date(),
//                 product.id,
//             ])
//             conn.release()
//             console.log(result.rows[0])
//             return result.rows[0]
//         } catch (err) {
//             throw new Error(
//                 `Can not update to products on id: ${product} ${err}`
//             )
//         }
//     }
//
//     async delete(id: string): Promise<Product> {
//         try {
//             const sql = 'DELETE FROM products WHERE id=($1)'
//             const conn = await Client.connect()
//             const result = await conn.query(sql, [id])
//             conn.release()
//             return result.rows[0]
//         } catch (err) {
//             throw new Error(`Can not delete to products on id: ${id} ${err}`)
//         }
//     }
// }
