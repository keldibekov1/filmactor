import express from "express";
import { create } from "../controllers/moviesinfo.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: MoviesInfo
 *   description: Filmlar va aktyorlarni bog‘lash
 */

/**
 * @swagger
 * /movies-info:
 *   post:
 *     summary: "Aktyorni filmga bog‘lash"
 *     tags: [MoviesInfo]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - actorId
 *               - movieId
 *             properties:
 *               actorId:
 *                 type: integer
 *                 description: "Aktyorning ID raqami"
 *               movieId:
 *                 type: integer
 *                 description: "Filmning ID raqami"
 *     responses:
 *       201:
 *         description: "Aktyor filmga bog‘landi"
 *       400:
 *         description: "actorId va movieId talab qilinadi"
 *       500:
 *         description: "Server xatosi"
 */
router.post("/", create);

export default router;
