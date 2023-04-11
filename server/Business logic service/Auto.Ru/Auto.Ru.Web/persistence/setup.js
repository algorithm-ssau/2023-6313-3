import { Sequelize } from "sequelize";
export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "persistence/autoru.db",
  logging: false,
});
