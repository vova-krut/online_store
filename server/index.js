import express from "express";
import dotenv from "dotenv";
import sequalize from "./db.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

const start = async () => {
    try {
        await sequalize.authenticate();
        await sequalize.sync();
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
};

start();
