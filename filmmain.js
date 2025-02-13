import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import swaggerDocs from "./swagger.js";

import sequelize from "./config/db.js";
import actorRoute from "./routes/actor.routes.js";
import moviesRoute from "./routes/movies.routes.js";
import movieInfoRoute from "./routes/movieinfo.routes.js";
import filmActorsRoute from "./routes/filmActors.routes.js";



dotenv.config();
const app = express();
const PORT = process.env.PORT || 6000;

app.use(cors());
app.use(express.json());

app.use("/actors", actorRoute);
app.use("/movies", moviesRoute);
app.use("/movies-info", movieInfoRoute);
app.use("/film-actors", filmActorsRoute);



swaggerDocs(app);

async function startServer() {
  try {
    await sequelize.sync({ force: false });
    console.log("Database connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error("Database connection failed:", error);
  }
}

startServer();
