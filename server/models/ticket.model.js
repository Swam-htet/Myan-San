const {Schema} = require("mongoose");
const mongoose = require("mongoose");
const {tr} = require("@faker-js/faker");

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


const CustomerSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    NRC: {
        type: String,
        required: true,
    },
    address: {
        type: AddressSchema,
        required: true
    },
});


let SeatSchema = new mongoose.Schema({
    seatID: {
        type: String, required: true
    }
})


const TicketSchema = new Schema({
    customer: {
        type: CustomerSchema,
        required: true
    },
    route: {
        type: Schema.ObjectId,
        required: true,
        ref: "Route"
    },
    seats: [SeatSchema]
});

module.exports = mongoose.model("Ticket", TicketSchema);
