import express from "express";
import { findAll, findOne, findBySearch, create, update, remove } from "../controllers/movies.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Movies
 *   description: Filmlar bilan ishlash
 */

/**
 * @swagger
 * /movies:
 *   get:
 *     summary: "Barcha filmlarni olish"
 *     tags: [Movies]
 *     responses:
 *       200:
 *         description: "Barcha filmlar ro‘yxati"
 *       500:
 *         description: "Server xatosi"
 */
router.get("/", findAll);

/**
 * @swagger
 * /movies/{id}:
 *   get:
 *     summary: "Bitta filmni olish"
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: "Filming ID raqami"
 *     responses:
 *       200:
 *         description: "Topilgan film ma’lumotlari"
 *       404:
 *         description: "Film topilmadi"
 *       500:
 *         description: "Server xatosi"
 */
router.get("/:id", findOne);

/**
 * @swagger
 * /movies/search:
 *   get:
 *     summary: "Ism bo‘yicha film qidirish"
 *     tags: [Movies]
 *     parameters:
 *       - in: query
 *         name: search
 *         required: true
 *         schema:
 *           type: string
 *         description: "Film nomi"
 *     responses:
 *       200:
 *         description: "Qidiruv natijalari"
 *       400:
 *         description: "search query parametri talab qilinadi"
 *       500:
 *         description: "Server xatosi"
 */
router.get("/search", findBySearch);

/**
 * @swagger
 * /movies:
 *   post:
 *     summary: "Yangi film qo‘shish"
 *     tags: [Movies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - year
 *             properties:
 *               name:
 *                 type: string
 *                 description: "Filming nomi"
 *               year:
 *                 type: integer
 *                 description: "Chiqish yili"
 *     responses:
 *       201:
 *         description: "Yangi film qo‘shildi"
 *       500:
 *         description: "Server xatosi"
 */
router.post("/", create);

/**
 * @swagger
 * /movies/{id}:
 *   put:
 *     summary: "Filmni yangilash"
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: "Yangilanadigan filmning ID raqami"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: "Yangi nom"
 *               year:
 *                 type: integer
 *                 description: "Yangi yili"
 *     responses:
 *       200:
 *         description: "Film muvaffaqiyatli yangilandi"
 *       500:
 *         description: "Server xatosi"
 */
router.put("/:id", update);

/**
 * @swagger
 * /movies/{id}:
 *   delete:
 *     summary: "Filmni o‘chirish"
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: "O‘chiriladigan filmning ID raqami"
 *     responses:
 *       200:
 *         description: "Film muvaffaqiyatli o‘chirildi"
 *       500:
 *         description: "Server xatosi"
 */
router.delete("/:id", remove);

export default router;
