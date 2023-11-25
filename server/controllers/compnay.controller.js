const companyService = require("../services/company.service");

// get all buses
async function getAllCompany(req, res, next) {
    try {
        let company = await companyService.getAllCompany();
        if (company) {
            res.status(200).json(company);
        } else {
            res.status(400).json({message: "Company not found"});
        }
    } catch (error) {
        res.status(400).json({message: `Company not found`});
    }

}

// get bus by id
async function getCompanyByID(req, res, next) {
    let id = req.params.id;

    try {
        let company = await companyService.getCompanyByID(id);
        if (!company) {
            res.status(400).json({message: `Company ID :${id} not found`});
        } else {
            res.status(200).json(company);
        }
    } catch (error) {
        res.status(400).json({message: `Company ID :${id} not found`});
    }
}

// create store
async function createCompany(req, res, next) {
    let body = req.body;
    try {
        let company = await companyService.createCompany(body);
        if (!company) {
            res.status(400).json({message: `Can't save Company`});
        } else {
            res.status(201).json(company);
        }
    } catch (error) {
        res.status(400).json({message: `Can't save Company`});
    }
}

// update store by id
async function updateCompanyByID(req, res, next) {
    let id = req.params.id;
    let updateBody = req.body;
    try {
        let company = await companyService.updateCompanyByID(id, updateBody);
        if (!company) {
            res.status(400).json({message: `Company ID :${id} not found`});
        } else {
            res.status(200).json(company);
        }
    } catch (error) {
        res.status(400).json({message: `Company ID :${id} not found`});
    }
}

// delete store by id
async function deleteCompanyByID(req, res, next) {
    let id = req.params.id;
    try {
        let bus = await companyService.deleteCompanyByID(id);
        if (!bus) {
            res.status(400).json({message: `Company ID :${id} not found`});
        } else {
            res.status(200).json(bus);
        }
    } catch (error) {
        res.status(400).json({message: `Company ID :${id} not found`});
    }
}

module.exports = {
    getAllCompany,
    getCompanyByID,
    createCompany,
    updateCompanyByID,
    deleteCompanyByID,
}