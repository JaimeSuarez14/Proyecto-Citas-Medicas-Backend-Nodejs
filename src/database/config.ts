import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const USERNAME = process.env.DB_USER || 'root'
const DATABASE = process.env.DB_NAME || 'citas_medicas_db'
const PASSWORD = process.env.DB_PASSWORD || ''  
const HOST = process.env.DB_HOST || ''
const DIALECT = process.env.DB_DIALECT 


export const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
  host: HOST,
  dialect: 'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});