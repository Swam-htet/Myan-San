let Staff = require("../models/staff.model");

// bcrypt import
let bcrypt = require('bcrypt');

async function getAllStaff() {
    return Staff.find();
}

async function getStaffByID(id) {
    return Staff.findById(id);
}

async function createStaff(staff) {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(staff.password, salt);
    let newStaff = new Staff({
        firstName: staff.firstName,
        lastName: staff.lastName,
        userName: staff.userName,
        email: staff.email,
        dateOfBirth: new Date(staff.dateOfBirth),
        password: hashPassword,
        address: staff.address
    });
    return newStaff.save();
}

async function deleteStaff(staffID) {
    let staff = await Staff.findByIdAndDelete(staffID);
    return staff;
}

async function staffLogin(staff) {
    const filter = {
        email: staff.email,
        userName: staff.userName,
    };

    let login_staff = await Staff.findOne(filter);

    if (login_staff) {
        const validPass = await bcrypt.compare(staff.password, login_staff.password);
        if (validPass) {
            return login_staff;
        } else {
            throw Error("Invalid username or password");
        }
    } else {
        throw Error("Invalid username or password");
    }
}

module.exports = {
    staffLogin,
    deleteStaff,
    getAllStaff,
    getStaffByID,
    createStaff,
}