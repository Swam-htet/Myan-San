let mongoose = require('mongoose');
const {Schema} = require("mongoose");

let RouteSchema = new mongoose.Schema({
        availableSeat: {
            type: Number,
            required: true,
        },
        fromTown: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "Town",
        },
        toTown: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "Town",
        },
        scheduleDate: {
            type: Date,
            required: true
        },

    }
)
module.exports = mongoose.model("Route", RouteSchema);

