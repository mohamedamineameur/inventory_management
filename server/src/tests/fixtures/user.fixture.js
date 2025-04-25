import { User } from "../../models/index.model.js";
import bycrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();
const saltRounds = parseInt(process.env.saltRounds) || 10;

const user = {
    username: "testuser",
    password: "testpassword",
    role: "user",
    };
const hashedPassword = await bycrypt.hash(user.password, saltRounds);
const newUser = await User.create({
    ...user,
    password: hashedPassword,
});

export const userFixture = {
    id: newUser.id,
    username: newUser.username,
    password: user.password,
    role: newUser.role,
};