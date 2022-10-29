import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv'

dotenv.config()

const {
    POSTGRES_HOST,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_DB,
} = process.env;

export const sequelize = new Sequelize(POSTGRES_DB || 'postgres', POSTGRES_USER || 'postgres', POSTGRES_PASSWORD || 'postgres', {
    host: POSTGRES_HOST,
    dialect: 'postgres' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});


// export async function connection(): Promise<void> {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//     } catch (err) {
//         console.error(`Unable to connect to the database: ${err}`);
//     }
// }
