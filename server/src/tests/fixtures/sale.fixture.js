import { Sale } from "../../models/index.model.js";
import { userFixture } from "./user.fixture.js";

const sale = {
    userId: userFixture.id,
}
const newSale = await Sale.create({
    ...sale,
});
export const saleFixture = {
    id: newSale.id,
    userId: newSale.userId,
    createDate: newSale.createDate,
};