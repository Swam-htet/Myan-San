let Bus = require("../models/bus.model");

// get all bus
async function getAllBus() {
  return Bus.find().populate("company");
}

// get bus by id
async function getBusByID(id) {
  return Bus.findById(id).populate("company");
}

// create bus
async function createBus(bus) {
  return new Bus(bus).save();
}

// update bus
async function updateBusByID(id, body) {
  return Bus.findByIdAndUpdate(id, body, { new: true }).populate("company");
}

// delete bus
async function deleteBusByID(id) {
  return Bus.findByIdAndDelete(id).populate("company");
}

module.exports = {
  getAllBus,
  getBusByID,
  createBus,
  updateBusByID,
  deleteBusByID,
};
