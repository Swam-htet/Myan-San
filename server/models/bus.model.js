let mongoose = require('mongoose');
const {Schema} = require("mongoose");
const BusSchema = new Schema({
    registrationNumber: {
        type: String,
        required: true,
        unique: true,
    },
    make: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    seatingCapacity: {
        type: Number,
        required: true,
    },
    driver: {
        name: String,
        licenseNumber: String,
    },
    company: {
        type: Schema.Types.ObjectId,
        ref: 'Company'
    }
});

module.exports = mongoose.model("Bus", BusSchema);
