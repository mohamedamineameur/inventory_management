import { database } from "../database/database.js";
import { DataTypes } from "sequelize";

// Ensure the database connection is established
if (!database) {
    throw new Error("Database connection is not initialized. Please check your database configuration.");
}

export const Category = database.define("Category", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
}, {
    tableName: "categories",
    timestamps: false,
});
