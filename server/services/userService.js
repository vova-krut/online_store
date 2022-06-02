import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User, Basket } from "../models/models.js";

const generateJwt = (id, email, role) => {
    return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
        expiresIn: "24h",
    });
};

class UserService {
    async registration(email, password, role) {
        if (!email || !password) {
            throw new Error("Email or password is incorrect");
        }
        const candidate = await User.findOne({ where: { email } });
        if (candidate) {
            throw new Error("User with this email already exists");
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({ email, role, password: hashPassword });
        const basket = await Basket.create({ userId: user.id });
        const token = generateJwt(user.id, user.email, user.role);
        return token;
    }

    async login(email, password) {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            throw new Error("User with this email is not found");
        }
        const comparePasswords = bcrypt.compareSync(password, user.password);
        if (!comparePasswords) {
            throw new Error("You have entered a wrong password");
        }
        const token = generateJwt(user.id, user.email, user.role);
        return token;
    }

    async check(user) {
        const token = generateJwt(user.id, user.email, user.role);
        return token;
    }
}

export default new UserService();
