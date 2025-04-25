import { Item } from "../../models/index.model.js";
import { categoryFixture } from "./category.fixture.js";

const item = {
    name: "testItem",
    description: "testDescription",
    price: 10.0,
    categoryId: categoryFixture.id,
    };

const newItem = await Item.create({
    ...item,
});
export const itemFixture = {
    id: newItem.id,
    name: newItem.name,
    description: newItem.description,
    price: newItem.price,
    categoryId: newItem.categoryId,
};