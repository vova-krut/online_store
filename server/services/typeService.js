import { Type } from "../models/models.js";

class TypeService {
    async create(name) {
        const type = await Type.create({ name });
        return type;
    }

    async getAll() {
        const types = await Type.findAll();
        return types;
    }
}

export default new TypeService();
