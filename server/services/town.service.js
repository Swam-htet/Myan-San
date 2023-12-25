let Town = require("../models/town.model");

// get all town
async function getAllTown() {
  return Town.find();
}

// get town by id
async function getTownByID(id) {
  return Town.findById(id);
}

// create town
async function createTown(town) {
  return new Town(town).save();
}

// update town
async function updateTownByID(id, body) {
  return Town.findByIdAndUpdate(id, body, { new: true });
}

// delete town
async function deleteTownByID(id) {
  return Town.findByIdAndDelete(id);
}

module.exports = {
  getAllTown,
  getTownByID,
  createTown,
  updateTownByID,
  deleteTownByID,
};
