const TextContent = require('../models/text');

exports.updateText = async (req, res) => {
  const { key, value } = req.body;

  const text = await TextContent.findOneAndUpdate(
    { key },
    { value },
    { upsert: true, new: true }
  );

  res.json({ success: true, text });
};

exports.getTexts = async (req, res) => {
  const texts = await TextContent.find({});
  res.json({ success: true, texts });
};
