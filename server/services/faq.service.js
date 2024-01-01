let Faq = require("../models/faq.model");

// get all faq
async function getAllFaq() {
    return Faq.find();
}


// create faq
async function createFaq(faq) {
    return new Faq(faq).save();
}


module.exports = {
    getAllFaq,
    createFaq
};
