let express = require("express");
let router = express.Router();

let faqController = require("../controllers/faq.controller");

router.get("/", faqController.getAllFaq);

router.post("/", faqController.createFaq);

router.delete("/:id", faqController.deleteFaqByID);

module.exports = router;
