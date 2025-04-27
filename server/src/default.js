import { User } from "./models/user.model.js";
import dotenv from "dotenv";
import bycrypt from "bcrypt";
dotenv.config();
const saltRounds = parseInt(process.env.saltRounds) || 10;

const username = process.env.username
const password = process.env.password
const role = process.env.role

export async function defaultUser() {
  const hashedPassword = bycrypt.hashSync(password, saltRounds);
  try{
    const existingUser = await User.findOne({ where: { username: username } });
  if (!existingUser) {
  await User.create({
    username: username,
    password: hashedPassword,
    role: role
  });

  console.log("Default user created successfully");
}
    else {
        console.log("Default user already exists");
    return;
    }
  }
  catch (error) {
    console.error("Error creating default user:", error);
  }
}