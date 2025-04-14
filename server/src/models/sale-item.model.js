import { database } from "../database/database.js";
import { DataTypes } from "sequelize";
import { Sale } from "./sale.model.js";
import { Item } from "./item.model.js";

// Ensure the database connection is established
if (!database) {
    throw new Error("Database connection is not initialized. Please check your database configuration.");
}

export const SaleItem = database.define("SaleItem", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    saleId: {
        type: DataTypes.UUID,
        references: {
            model: Sale,
            key: "id",
        },
        allowNull: false,
    },
    itemId: {
        type: DataTypes.UUID,
        references: {
            model: Item,
            key: "id",
        },
        allowNull: false,
    },
}, {
    tableName: "sale_items",
    timestamps: false,
});