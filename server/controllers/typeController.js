import ApiError from "../error/ApiError.js";
import typeService from "../services/typeService.js";

class TypeController {
    async create(req, res, next) {
        try {
            const { name } = req.body;
            const type = await typeService.create(name);
            return res.json(type);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res, next) {
        try {
            const types = await typeService.getAll();
            return res.json(types);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}

export default new TypeController();
