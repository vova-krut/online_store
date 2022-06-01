import * as uuid from "uuid";
import path from "path";
import { Device } from "../models/models.js";
import ApiError from "../error/ApiError.js";

class DeviceController {
    async create(req, res, next) {
        try {
            const { name, price, brandId, typeId, info } = req.body;
            const { img } = req.files;
            let fileName = uuid.v4() + ".jpg";
            img.mv(path.resolve("static", fileName));

            const device = await Device.create({
                name,
                price,
                brandId,
                typeId,
                img: fileName,
            });

            return res.json(device);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res) {}

    async getOne(req, res) {}
}

export default new DeviceController();
