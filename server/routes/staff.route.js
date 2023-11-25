let express = require('express');
let router = express.Router();
let staffController = require("../controllers/staff.controller");


router.get('/', staffController.getAllStaff);

router.get('/:id', staffController.getStaffByID);

// user register
router.post("/", staffController.creatStaff);

// // user login
router.post("/login",staffController.staffLogin);


router.delete("/:id",staffController.deleteStaffByID);

// router.post("/login",staffController.staffLogin);


module.exports = router;
