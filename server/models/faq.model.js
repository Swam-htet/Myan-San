let { Schema } = require("mongoose");
const mongoose = require("mongoose");

const FaqSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Faq", FaqSchema);
