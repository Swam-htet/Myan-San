let express = require('express');
let router = express.Router();
let staffController = require("../controllers/staff.controller");


router.get('/', staffController.getAllStaff);

router.get('/:id', staffController.getStaffByID);

router.delete("/:id",staffController.deleteStaffByID);

router.put('/:id', staffController.updateStaffByID);

// user register
router.post("/", staffController.creatStaff);

// // user login
router.post("/login",staffController.staffLogin);



// router.post("/login",staffController.staffLogin);


module.exports = router;
