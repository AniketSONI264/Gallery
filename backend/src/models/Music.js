const mongoose = require("mongoose");

const trackSchema = new mongoose.Schema({
  url: String,
  title: String,
  enabled: { type: Boolean, default: true },
});

const musicSchema = new mongoose.Schema({
  tracks: [trackSchema],
  mode: {
    type: String,
    enum: ["order", "shuffle"],
    default: "order",
  },
});

module.exports = mongoose.model("Music", musicSchema);
