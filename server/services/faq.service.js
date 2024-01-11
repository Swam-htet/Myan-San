let Faq = require("../models/faq.model");
const Company = require("../models/company.model");

// get all faq
async function getAllFaq() {
    return Faq.find();
}


// create faq
async function createFaq(faq) {
    return new Faq(faq).save();
}

async function deleteFAQByID(id) {
    return Faq.findByIdAndDelete(id);
}

module.exports = {
    getAllFaq,
    createFaq,
    deleteFAQByID
};
