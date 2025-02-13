//filmActors.controller.js
import { Op } from "sequelize";
import Actor from "../models/actor.model.js";
import Movies from "../models/movies.model.js";

export async function findFilmOrActor(req, res) {
  try {
    let { name } = req.query;
    if (!name) {
      return res.status(400).json({ error: "name query parametri talab qilinadi" });
    }

    let actors = await Actor.findAll({
      where: { name: { [Op.like]: `%${name}%` } },
      include: [{ model: Movies }]
    });

    let movies = await Movies.findAll({
      where: { name: { [Op.like]: `%${name}%` } },
      include: [{ model: Actor }]
    });

    res.status(200).json({ actors, movies });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Server xatosi" });
  }
}
