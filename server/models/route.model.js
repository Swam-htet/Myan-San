let mongoose = require('mongoose');
const {Schema} = require("mongoose");

let SeatSchema = new mongoose.Schema({
    seatID: {
        type: String, required: true
    }, available: {
        type: Boolean, required: true, default: true
    }
})

let RouteSchema = new mongoose.Schema({
    availableSeat: {type: Number, required: true},
    seats: [SeatSchema],
    fromTown: {
        type: Schema.Types.ObjectId, required: true, ref: "Town",
    }, toTown: {
        type: Schema.Types.ObjectId, required: true, ref: "Town",
    }, scheduleDate: {
        type: Date, required: true
    },
    bus: {
        type: Schema.Types.ObjectId, required: true, ref: "Bus",
    }

})
module.exports = mongoose.model("Route", RouteSchema);

