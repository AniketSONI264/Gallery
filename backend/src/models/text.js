// const mongoose = require('mongoose');

// const textContentSchema = new mongoose.Schema(
//   {
//     key: {
//       type: String,
//       required: true,
//       unique: true,
//     },

//     value: {
//       type: mongoose.Schema.Types.Mixed,
//       required: true,
//     },
//     isDraft: { type: Boolean, default: false },
//     { timestamps: true },
//   },
// );

// module.exports = mongoose.model('TextContent', textContentSchema);




const mongoose = require('mongoose');

const textContentSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    value: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },

    isDraft: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('TextContent', textContentSchema);
