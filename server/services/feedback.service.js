let Feedback = require("../models/feedback.model");

// get all feedback
async function getAllFeedback() {
    return Feedback.find();
}


// create feedback
async function createFeedback(feedback) {
    return new Feedback(feedback).save();
}


module.exports = {
    getAllFeedback,
    createFeedback
};
