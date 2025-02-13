import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Movies = sequelize.define("Movies", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  year: { type: DataTypes.INTEGER, allowNull: false },
});

export default Movies;
