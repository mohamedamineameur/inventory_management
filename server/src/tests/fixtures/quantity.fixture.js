import { Quantity } from "../../models/index.model.js";
import { itemFixture } from "./item.fixture.js";

const quantity = {
    quantity: 5,
    itemId: itemFixture.id,
};
const newQuantity = await Quantity.create({
    ...quantity,
});
export const quantityFixture = {
    id: newQuantity.id,
    quantity: newQuantity.quantity,
    itemId: newQuantity.itemId,
};