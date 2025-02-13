

import { Sequelize } from "sequelize";

let sequelize = new Sequelize({
  username: "root",
  database: "n16",
  password: "1212",
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

export default sequelize;
