let express = require("express");
let router = express.Router();

// import company controller
let companyController = require("../controllers/compnay.controller");

// get all company
router.get("/", companyController.getAllCompany);

// get company by id
router.get("/:id", companyController.getCompanyByID);

// create company
router.post("/", companyController.createCompany);

// update company by id
router.put("/:id", companyController.updateCompanyByID);

// delete company by id
router.delete("/:id", companyController.deleteCompanyByID);

module.exports = router;
