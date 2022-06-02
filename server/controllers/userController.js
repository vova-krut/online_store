import ApiError from "../error/ApiError.js";
import userService from "../services/userService.js";

class UserController {
    async registration(req, res, next) {
        try {
            const { email, password, role } = req.body;
            const token = await userService.registration(email, password, role);
            return res.json({ token });
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const token = await userService.login(email, password);
            return res.json({ token });
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async check(req, res, next) {
        try {
            const token = await userService.check(req.user);
            return res.json({ token });
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}

export default new UserController();
