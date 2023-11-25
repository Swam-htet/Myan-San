let Bus = require("../models/bus.model");

// get all bus
async function getAllBus() {
    return Bus.find();
}

// get bus by id
async function getBusByID(id) {
    return Bus.findById(id);
}

// create bus
async function createBus(bus) {
    let newBus = new Bus(bus);
    return newBus.save();
}

// update bus
async function updateBusByID(id, body) {
    return Bus.findByIdAndUpdate(id, body, {new: true});
}

// delete bus
async function deleteBusByID(id) {
    return Bus.findByIdAndDelete(id);
}

module.exports = {
    getAllBus,
    getBusByID,
    createBus,
    updateBusByID,
    deleteBusByID
}