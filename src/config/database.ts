import { Dialect } from "sequelize";

const databaseConfigurations = {
  host: process.env.DATABASE_HOST || "localhost",
  username: process.env.DATABASE_USERNAME || "root",
  password: process.env.DATABASE_PASSWORD || "secret1231231",
  port: process.env.DATABASE_PORT || 3306,
  name: process.env.DATABASE_NAME || "",
  driver: process.env.DATABASE_DRIVER as Dialect,
};

export default databaseConfigurations;
