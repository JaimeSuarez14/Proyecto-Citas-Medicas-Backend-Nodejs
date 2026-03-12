import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const USERNAME = process.env.DB_USER || 'root'
const DATABASE = process.env.DB_NAME || 'citas_medicas_db'
const PASSWORD = process.env.DB_PASSWORD || ''  
const HOST = process.env.DB_HOST || ''
const DIALECT = process.env.DB_DIALECT || 'mysql'


export const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
  host: HOST,
  dialect: DIALECT as any/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});