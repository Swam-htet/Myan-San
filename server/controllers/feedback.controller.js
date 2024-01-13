const feedbackService = require("../services/feedback.service");

async function getAllFeedback(req, res, next) {
  try {
    let feedback = await feedbackService.getAllFeedback();
    if (feedback) {
      res.status(200).json(feedback);
    } else {
      res.status(400).json({ message: "Feedback not found" });
    }
  } catch (error) {
    res.status(400).json({ message: `Feedback not found` });
  }
}

// create faq
async function createFeedback(req, res, next) {
  let body = req.body;
  try {
    let feedback = await feedbackService.createFeedback(body);
    if (!feedback) {
      res.status(400).json({ message: `Can't save feedback` });
    } else {
      res.status(201).json(feedback);
    }
  } catch (error) {
    res.status(400).json({ message: `Can't save feedback` });
  }
}

module.exports = {
  getAllFeedback,
  createFeedback,
};
