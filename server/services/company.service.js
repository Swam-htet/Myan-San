let Company = require("../models/company.model");

// get all company
async function getAllCompany() {
    return Company.find();
}

// get company by id
async function getCompanyByID(id) {
    return Company.findById(id);
}

// create bus
async function createCompany(bus) {
    let newCompany = new Company(bus);
    return newCompany.save();
}

// update bus
async function updateCompanyByID(id, body) {
    return Company.findByIdAndUpdate(id, body, {new: true});
}

// delete bus
async function deleteCompanyByID(id) {
    return Company.findByIdAndDelete(id);
}

module.exports = {
    getAllCompany,
    getCompanyByID,
    createCompany,
    updateCompanyByID,
    deleteCompanyByID
}