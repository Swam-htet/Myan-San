let {Schema} = require('mongoose');
const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
});
const CompanySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    address: AddressSchema,
});

module.exports = mongoose.model("Company", CompanySchema);
