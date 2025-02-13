//movies.controller.js
import Actor from "../models/actor.model.js";
import Movies from "../models/movies.model.js";

async function findAll(req, res) {
  try {
    let movies = await Movies.findAll({ include: [Actor] });
    res.send({ data: movies });
  } catch (error) {
    console.log(error.message);
  }
}

async function findOne(req, res) {
  try {

    let id = req.params.id;
    let movie = await Movies.findByPk(id, { include: [Actor] });
    res.send({ data: movie });
  } catch (error) {
    console.log(error.message);
  }
}





async function findBySearch(req, res) {
  try {
    let search = req.query.search;
    let movies = await Movies.findAll({
      where: {
        title: {
          [Op.like]: `%${search}%`,
        },
      },
    });
    res.send({ data: movies });
  } catch (error) {
    console.log(error.message);
  }
}

async function create(req, res) {
  try {
    let body = req.body;
    await Movies.create(body);
    res.status(201).send({ data: "success" });
  } catch (error) {
    console.log(error.message);
  }
}

async function update(req, res) {
  try {
    let id = req.params.id;
    let body = req.body;
    await Movies.update(body, { where: { id: id } });
    res.send({ data: "success" });
  } catch (error) {
    console.log(error.message);
  }
}

async function remove(req, res) {
  try {
    let id = req.params.id;
    await Movies.destroy({ where: { id: id } });
    res.send({ data: "success" });
  } catch (error) {
    console.log(error.message);
  }
}

export { findAll, findOne, findBySearch, create, update, remove };
