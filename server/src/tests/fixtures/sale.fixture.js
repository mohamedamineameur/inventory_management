import { Sale } from "../../models/index.model.js";
import { userFixture } from "./user.fixture.js";

export const saleFixture = async (userId) => {
    const sale = {      
        userId: userId,
    };
    const newSale = await Sale.create({
        ...sale,
    });
    return {
        id: newSale.id,
        userId: newSale.userId,
    };
    }