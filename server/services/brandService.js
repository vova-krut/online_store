import { Brand } from "../models/models.js";

class BrandService {
    async create(name) {
        const brand = await Brand.create({ name });
        return brand;
    }

    async getAll() {
        const brands = await Brand.findAll();
        return brands;
    }
}

export default new BrandService();
