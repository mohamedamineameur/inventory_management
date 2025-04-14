import {createUser, getUsers, updateUser, deleteUser, loginUser,logoutUser,me} from "../controllers/user.controller.js";
import { userPolicy } from "../policies/user.policy.js";
import { Router } from "express";
import { userValidation } from "../validations/user.validation.js";

const userRouter = Router();

userRouter.post("/login", loginUser);
userRouter.post("/logout", logoutUser);
userRouter.post("/", userPolicy.create, userValidation, createUser);
userRouter.get("/", userPolicy.get, getUsers);
userRouter.get("/me", me);
userRouter.patch("/:id", userPolicy.update, updateUser);
userRouter.delete("/:id", userPolicy.deleteUser, deleteUser);

export default userRouter;

