import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

export default new Sequelize(
    String(process.env.DB_NAME),
    String(process.env.DB_USER),
    String(process.env.DB_PASSWORD),
    {
        dialect: "postgres",
        host: String(process.env.DB_HOST),
        port: process.env.DB_PORT,
    }
);
