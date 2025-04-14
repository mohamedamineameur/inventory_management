import { Sequelize } from "sequelize";

export const database = new Sequelize( {
    host: "localhost",
    dialect: "sqlite",
    storage: "./database.sqlite",
    logging: true,
    define: {
        timestamps: false,
    },
});