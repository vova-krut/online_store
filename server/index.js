import express from "express";
import models from "./models/models.js";
import dotenv from "dotenv";
import sequalize from "./db.js";
import cors from "cors";
import fileUpload from "express-fileupload";
import router from "./routes/index.js";
import errorHandler from "./middleware/ErrorHandlingMiddleware.js";
import path from "path";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve("static")));
app.use(fileUpload({}));
app.use("/api", router);
app.use(errorHandler);

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
