const townService = require("../services/town.service");

// get all town
async function getAllTown(req, res, next) {
    try {
        let town = await townService.getAllTown();
        if (town) {
            res.status(200).json(town);
        } else {
            res.status(400).json({message: "Town not found"});
        }
    } catch (error) {
        res.status(400).json({message: `Town not found`});
    }

}

// get town by id
async function getTownByID(req, res, next) {
    let id = req.params.id;

    try {
        let town = await townService.getTownByID(id);
        if (!town) {
            res.status(400).json({message: `Town ID :${id} not found`});
        } else {
            res.status(200).json(town);
        }
    } catch (error) {
        res.status(400).json({message: `Town ID :${id} not found`});
    }
}

// create town
async function createTown(req, res, next) {
    let body = req.body;
    try {
        let town = await townService.createTown(body);
        if (!town) {
            res.status(400).json({message: `Can't save Town`});
        } else {
            res.status(201).json(town);
        }
    } catch (error) {
        res.status(400).json({message: `Can't save Town`});
    }
}

// update town by id
async function updateTownByID(req, res, next) {
    let id = req.params.id;
    let updateBody = req.body;
    try {
        let town = await townService.updateTownByID(id, updateBody);
        if (!town) {
            res.status(400).json({message: `Town ID :${id} not found`});
        } else {
            res.status(200).json(town);
        }
    } catch (error) {
        res.status(400).json({message: `Town ID :${id} not found`});
    }
}

// delete town by id
async function deleteTownByID(req, res, next) {
    let id = req.params.id;
    try {
        let town = await townService.deleteTownByID(id);
        if (!town) {
            res.status(400).json({message: `Town ID :${id} not found`});
        } else {
            res.status(200).json(town);
        }
    } catch (error) {
        res.status(400).json({message: `Town ID :${id} not found`});
    }
}

module.exports = {
    getAllTown,
    getTownByID,
    createTown,
    updateTownByID,
    deleteTownByID,
}