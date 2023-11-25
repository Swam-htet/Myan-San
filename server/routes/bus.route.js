let express = require("express");
let router = express.Router();

// import bus controller
let busController = require("../controllers/bus.controller");

// get all storesRoute
router.get("/", busController.getAllBus);

// get store by id
router.get("/:id", busController.getBusByID);

// create store
router.post("/", busController.createBus);

// update store by id
router.put("/:id", busController.updateBusByID);

// delete store by id
router.delete("/:id", busController.deleteBusByID);

module.exports = router;