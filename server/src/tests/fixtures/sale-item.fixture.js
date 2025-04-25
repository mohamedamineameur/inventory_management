import { SaleItem } from "../../models/index.model.js";
import { itemFixture } from "./item.fixture.js";
import { saleFixture } from "./sale.fixture.js";
const saleItem = {
    quantity: 5,
    itemId: itemFixture.id,
    saleId: saleFixture.id,
};
const newSaleItem = await SaleItem.create({
    ...saleItem,
});
export const saleItemFixture = {
    id: newSaleItem.id,
    quantity: newSaleItem.quantity,
    itemId: newSaleItem.itemId,
    saleId: newSaleItem.saleId,
};