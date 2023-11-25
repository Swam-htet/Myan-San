let express = require("express");
let router = express.Router();

// import town controller
let townController = require("../controllers/town.controller");

// get all town
router.get("/", townController.getAllTown);

// get town by id
router.get("/:id", townController.getTownByID);

// create town
router.post("/", townController.createTown);

// update town by id
router.put("/:id", townController.updateTownByID);

// delete town by id
router.delete("/:id", townController.deleteTownByID);

module.exports = router;