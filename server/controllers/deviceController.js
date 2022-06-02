import ApiError from "../error/ApiError.js";
import deviceService from "../services/deviceService.js";

class DeviceController {
    async create(req, res, next) {
        try {
            const { name, price, brandId, typeId, info } = req.body;
            const { img } = req.files;
            const device = await deviceService.create(
                name,
                price,
                brandId,
                typeId,
                info,
                img
            );
            return res.json(device);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res, next) {
        try {
            let { brandId, typeId, limit, page } = req.query;
            const devices = await deviceService.getAll(
                brandId,
                typeId,
                limit,
                page
            );
            return res.json(devices);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getOne(req, res, next) {
        try {
            const { id } = req.params;
            const device = await deviceService.getOne(id);
            return res.json(device);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}

export default new DeviceController();
