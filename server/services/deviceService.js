import * as uuid from "uuid";
import path from "path";
import { Device, DeviceInfo } from "../models/models.js";

class DeviceService {
    async create(name, price, brandId, typeId, info, img) {
        let fileName = uuid.v4() + ".jpg";
        img.mv(path.resolve("static", fileName));

        const device = await Device.create({
            name,
            price,
            brandId,
            typeId,
            img: fileName,
        });

        if (info) {
            info = JSON.parse(info);
            info.forEach((i) => {
                DeviceInfo.create({
                    title: i.title,
                    description: i.description,
                    deviceId: device.id,
                });
            });
        }

        return device;
    }

    async getAll(brandId, typeId, limit, page) {
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;
        let devices;
        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({ limit, offset });
        }
        if (brandId && !typeId) {
            devices = await Device.findAndCountAll({
                where: { brandId },
                limit,
                offset,
            });
        }
        if (!brandId && typeId) {
            devices = await Device.findAndCountAll({
                where: { typeId },
                limit,
                offset,
            });
        }
        if (brandId && typeId) {
            devices = await Device.findAndCountAll({
                where: { brandId, typeId },
                limit,
                offset,
            });
        }
        return devices;
    }

    async getOne(id) {
        const device = await Device.findOne({
            where: { id },
            include: [{ model: DeviceInfo, as: "info" }],
        });
        return device;
    }
}

export default new DeviceService();
