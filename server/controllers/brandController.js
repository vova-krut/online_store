import ApiError from "../error/ApiError.js";
import brandService from "../services/brandService.js";

class BrandController {
    async create(req, res, next) {
        try {
            const { name } = req.body;
            const brand = await brandService.create(name);
            return res.json(brand);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res) {
        try {
            const brands = await brandService.getAll();
            return res.json(brands);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}

export default new BrandController();
