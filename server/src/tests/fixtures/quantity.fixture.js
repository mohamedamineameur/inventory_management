import { Quantity } from "../../models/index.model.js";
import { itemFixture } from "./item.fixture.js";

export const quantityFixture = async () => {
    const item = await itemFixture();
    const quantity = {
        quantity: 10,
        itemId: item.id,
    };
    const newQuantity = await Quantity.create({
        ...quantity,
    });
    return {
        id: newQuantity.id,
        quantity: newQuantity.quantity,
        itemId: newQuantity.itemId,
    };
}