import { database } from "../database/database.js";
import { DataTypes } from "sequelize";

if (!database) {
    throw new Error("Database connection is not initialized. Please check your database configuration.");
}

export const User = database.define("User", {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM("admin", "user", "management"),
        allowNull: false,
    }
}, {
    tableName: "users",
    timestamps: false,
});
