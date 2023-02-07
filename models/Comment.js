const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },
    med: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Med",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
       type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }
});

module.exports = mongoose.model("Comment", CommentSchema);
