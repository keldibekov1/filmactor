import express from "express";
import { findAll, findOne, findBySearch, create, remove } from "../controllers/actor.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Actors
 *   description: Aktyorlar bilan ishlash
 */

/**
 * @swagger
 * /actors:
 *   get:
 *     summary: "Barcha aktyorlarni olish"
 *     tags: [Actors]
 *     responses:
 *       200:
 *         description: "Barcha aktyorlar ro‘yxati"
 *       500:
 *         description: "Server xatosi"
 */
router.get("/", findAll);

/**
 * @swagger
 * /actors/{id}:
 *   get:
 *     summary: "Bitta aktyorni olish"
 *     tags: [Actors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: "Aktyorning ID raqami"
 *     responses:
 *       200:
 *         description: "Topilgan aktyor ma’lumotlari"
 *       404:
 *         description: "Aktyor topilmadi"
 *       500:
 *         description: "Server xatosi"
 */
router.get("/:id", findOne);

/**
 * @swagger
 * /actors/search:
 *   get:
 *     summary: "Ism bo‘yicha aktyor qidirish"
 *     tags: [Actors]
 *     parameters:
 *       - in: query
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: "Aktyorning ismi"
 *     responses:
 *       200:
 *         description: "Qidiruv natijalari"
 *       400:
 *         description: "name query parametri talab qilinadi"
 *       500:
 *         description: "Server xatosi"
 */
router.get("/search", findBySearch);

/**
 * @swagger
 * /actors:
 *   post:
 *     summary: "Yangi aktyor qo‘shish"
 *     tags: [Actors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - age
 *             properties:
 *               name:
 *                 type: string
 *                 description: "Aktyorning ismi"
 *               age:
 *                 type: integer
 *                 description: "Aktyorning yoshi"
 *     responses:
 *       201:
 *         description: "Yangi aktyor qo‘shildi"
 *       500:
 *         description: "Server xatosi"
 */
router.post("/", create);

/**
 * @swagger
 * /actors/{id}:
 *   delete:
 *     summary: "Aktyorni o‘chirish"
 *     tags: [Actors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: "O‘chiriladigan aktyorning ID raqami"
 *     responses:
 *       200:
 *         description: "Aktyor muvaffaqiyatli o‘chirildi"
 *       500:
 *         description: "Server xatosi"
 */
router.delete("/:id", remove);

export default router;
