//moviesinfo.controller.js
import MoviesInfo from "../models/movieInfo.model.js";

async function create(req, res) {
  try {
    let { actorId, movieId } = req.body;

    if (!actorId || !movieId) {
      return res.status(400).json({ error: "actorId va movieId talab qilinadi" });
    }

    await MoviesInfo.create({ actorId, movieId });

    res.status(201).json({ message: "Aktyor filmga bog‘landi" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Server xatosi" });
  }
}

export { create };
