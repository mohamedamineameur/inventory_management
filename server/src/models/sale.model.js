import { database } from "../database/database.js";
import { DataTypes } from "sequelize";
import { User } from "./user.model.js";

// Ensure the database connection is established
if (!database) {
    throw new Error("Database connection is not initialized. Please check your database configuration.");
}

export const Sale = database.define("Sale", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
    userId: {
        type: DataTypes.UUID,
        references: {
            model: User,
            key: "id",
        },
        allowNull: false,
    },
    createDate:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,

    }
}, {
    tableName: "sales",
    timestamps: false,
});