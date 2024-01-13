let mongoose = require("mongoose");

const TownSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  station: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Town", TownSchema);
