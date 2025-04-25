import { Category } from "../../models/index.model.js";

const category = {
    name: "testCategory",
};

const newCategory = await Category.create({
    ...category,
});
export const categoryFixture = {
    id: newCategory.id,
    name: newCategory.name,
};