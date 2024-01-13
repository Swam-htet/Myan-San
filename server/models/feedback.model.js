let { Schema } = require("mongoose");
const mongoose = require("mongoose");

const CustomerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const FeedbackSchema = new Schema({
  customer: {
    type: CustomerSchema,
    required: true,
  },
  feedback: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Feedback", FeedbackSchema);
