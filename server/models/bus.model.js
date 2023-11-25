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
    driver: {
        name: String,
        licenseNumber: String,
    },
    class: {
        type: String,
        enum: ['First Class', 'Business Class', "Economy Class", "Sleeper Bus"],
        required: true,
    },
    company: {
        type: Schema.Types.ObjectId,
        ref: 'Company'
    }
});

module.exports = mongoose.model("Bus", BusSchema);
