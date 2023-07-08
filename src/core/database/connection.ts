import chalk from "chalk";
import databaseConfigurations from "config/database";
import { Sequelize } from "sequelize";

/**
 * Database client instance
 */
const connection = new Sequelize(
  databaseConfigurations.name,
  databaseConfigurations.username,
  databaseConfigurations.password,
  {
    host: databaseConfigurations.host,
    dialect: "mysql",
  },
);

/**
 * Connect to database
 */
async function authenticate() {
  await connection
    .authenticate()
    .then(() => {
      console.log(chalk.green("Connection has been established successfully."));
    })
    .catch((error: any) => {
      console.error(chalk.red("Unable to connect to the database: ", error));
    });
}

export default { connection, authenticate };
