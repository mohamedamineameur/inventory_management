import {createCategory, getCategories, updateCategory, deleteCategory} from "../controllers/category.controller.js";
import { Router } from "express";
import { categoryPolicy } from "../policies/category.policy.js";
import { categoryValidation } from "../validations/category.validation.js";

const categoryRouter = Router();
categoryRouter.post("/", categoryPolicy.create(),categoryValidation, createCategory);
categoryRouter.get("/", categoryPolicy.get(), getCategories);
categoryRouter.patch("/:id", categoryPolicy.update(), updateCategory);
categoryRouter.delete("/:id", categoryPolicy.deleteUser(), deleteCategory);
export default categoryRouter;
