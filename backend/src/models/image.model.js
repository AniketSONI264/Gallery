const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },

    publicId: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      trim: true,
      default: '',
    },

    section: {
      type: String,
      enum: ['hero', 'gallery', 'timeline', 'footer', 'surprise'],
      required: true,
    },

    isSurprise: {
      type: Boolean,
      default: false,
    },

    takenAt: {
      type: Date,
    },
    isDraft: {
      type: Boolean,
      default: false,
    },

    order: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Image', imageSchema);
