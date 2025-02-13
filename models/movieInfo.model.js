import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Actor from "./actor.model.js";
import Movies from "./movies.model.js";

const MoviesInfo = sequelize.define(
  "MoviesInfo",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    actorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Actor,
        key: "id",
      },
      onDelete: "CASCADE",
    },
    movieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Movies,
        key: "id",
      },
      onDelete: "CASCADE",
    },
  },
  { timestamps: false }
);


// Many-to-Many bog‘lanish
Actor.belongsToMany(Movies, { through: MoviesInfo, foreignKey: "actorId" });
Movies.belongsToMany(Actor, { through: MoviesInfo, foreignKey: "movieId" });

export default MoviesInfo;
