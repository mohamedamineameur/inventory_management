// category.fixture.js
import { Category } from "../../models/category.model.js"; // ✅ très important

export const createCategoryFixture = async () => {
  const newCategory = await Category.create({ name: "testCategory" });
  return {
    id: newCategory.id,
    name: newCategory.name,
  };
};
