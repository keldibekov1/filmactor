//actor.controller.js
import { Op } from "sequelize";
import Actor from "../models/actor.model.js";
import Movies from "../models/movies.model.js";

export async function findAll(req, res) {
  try {
    let actors = await Actor.findAll({ include: Movies });
    res.status(200).json(actors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function findOne(req, res) {
  try {
    let actor = await Actor.findByPk(req.params.id, { include: Movies });
    res.status(200).json(actor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function findBySearch(req, res) {
  try {
    let { name } = req.query;
    if (!name) return res.status(400).json({ error: "name query parametri talab qilinadi" });

    let actors = await Actor.findAll({ where: { name: { [Op.like]: `%${name}%` } }, include: Movies });
    let movies = await Movies.findAll({ where: { name: { [Op.like]: `%${name}%` } }, include: Actor });

    res.status(200).json({ actors, movies });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function create(req, res) {
  try {
    let newActor = await Actor.create(req.body);
    res.status(201).json(newActor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function remove(req, res) {
  try {
    await Actor.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
