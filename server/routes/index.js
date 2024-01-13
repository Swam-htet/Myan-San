let express = require("express");
let router = express.Router();

router.get("/", function (req, res, next) {
  res
    .status(200)
    .json({ message: "Express.js API server for Myan-San is running" });
});

module.exports = router;
