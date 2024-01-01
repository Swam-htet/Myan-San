let express = require("express");
let router = express.Router();

let feedbackController = require("../controllers/feedback.controller");

router.get("/", feedbackController.getAllFeedback);

router.post("/", feedbackController.createFeedback);

module.exports = router;