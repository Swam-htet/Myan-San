let express = require("express");
let router = express.Router();

let routeController = require("../controllers/route.controller");

router.get("/", routeController.getAllRoute);

router.get("/:id", routeController.getRouteByID);

router.post("/", routeController.createRoute);

router.put("/:id", routeController.updateRouteByID);

router.delete("/:id", routeController.deleteRouteByID);

module.exports = router;
