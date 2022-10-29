// const { Sequelize } = require('sequelize');

// // Option 3: Passing parameters separately (other dialects)
// const sequelize = new Sequelize('clothe', 'postgres', 'postgres', {
//     host: 'localhost',
//     dialect: 'postgres' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
// });

// export default async function connection() {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//     } catch (err) {
//         console.error(`Unable to connect to the database: ${err}`);
//     }
// }

import * as dotenv from 'dotenv'
import { Pool } from 'pg'

dotenv.config()

let {
    POSTGRES_HOST,
    POSTGRES_DB,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_PORT,
    ENV,
} = process.env

if (ENV === 'dev') {
    console.log('dev')
    POSTGRES_DB = process.env.POSTGRES_DB
} else if (ENV === 'test') {
    POSTGRES_DB = process.env.POSTGRES_DB_TEST
}

const client = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    port: POSTGRES_PORT ? parseInt(POSTGRES_PORT) : 5432
})


export default client
