// backend/routes/music.js
const express = require("express");
const router = express.Router();
const Music = require("../models/Music");

// GET music
router.get("/", async (req, res) => {
  const music = await Music.findOne();
  res.json(music);
});

router.put("/", async (req, res) => {
  const { tracks, mode } = req.body;

  let music = await Music.findOne();
  if (!music) {
    music = new Music({ tracks, mode });
  } else {
    music.tracks = tracks;
    music.mode = mode;
  }

  await music.save();
  res.json(music);
});


module.exports = router;
