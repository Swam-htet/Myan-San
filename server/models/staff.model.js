let mongoose = require('mongoose');
let Schema = mongoose.Schema;


// Define the Address schema
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


let StaffSchema = new Schema({
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        userName: {
            type: String,
            required: true,
            unique:true,
        },
        email: {
            type: String,
            required: true,
            unique:true,
        },
        password: {
            type: String,
            required: true
        },
        dateOfBirth: {
            type: Date,
            required: true
        },
        startDate: {
            type: Date,
            default: Date.now
        },
        address: {
            type: AddressSchema,
        },
        role: {
            type: String,
            enum: ['admin', 'staff'],
            default: 'staff'
        }
    }
)
module.exports = mongoose.model("Staff", StaffSchema);

