import express from "express";
import { findFilmOrActor } from "../controllers/filmActors.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: FilmActors
 *   description: Filmlar va aktyorlarni qidirish
 */

/**
 * @swagger
 * /film-actors:
 *   get:
 *     summary: "Aktyor yoki filmni nomi bo‘yicha qidirish"
 *     tags: [FilmActors]
 *     parameters:
 *       - name: name
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *         description: "Film yoki aktyor nomi"
 *     responses:
 *       200:
 *         description: "Qidiruv natijalari"
 *       400:
 *         description: "name query parametri talab qilinadi"
 *       500:
 *         description: "Server xatosi"
 */
router.get("/", findFilmOrActor);

export default router;
