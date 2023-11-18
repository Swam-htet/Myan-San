const {busService} = require("../services/");

// get all bus
async function getAllBus(req, res, next) {
    try {
        let buses = await busService.getAllBus();
        if (buses) {
            res.status(200).json(buses);
        } else {
            res.status(400).json({message: "Buses not found"});
        }
    } catch (error) {
        res.status(400).json({message: `Bus not found`});
    }
}


// get bus by id
async function getBusByID(req, res, next) {
    let id = req.params.id;
    // console.log("Bus id - ", id);
    try {
        let bus = await busService.getBusByID(id);
        if (!bus) {
            res.status(400).json({message: `Bus ID :${id} not found`});
        } else {
            res.status(200).json(bus);
        }
    } catch (error) {
        res.status(400).json({message: `Bus ID :${id} not found`});
    }
}


// create bus
async function createNewBus(req, res, next) {
    let body = req.body;
    try {
        let bus = await busService.createNewBus(body);
        if (!bus) {
            res.status(400).json({message: `Can't save bus`});
        } else {
            res.status(201).json(bus);
        }
    } catch (error) {
        res.status(400).json({message: `Can't save bus`});
    }
}

// update bus by id
async function updateBusByID(req, res, next) {
    let id = req.params["id"];
    let updateBody = req.body;
    try {
        let bus = await busService.updateBus(id, updateBody);
        if (!bus) {
            res.status(400).json({message: `Bus ID :${id} not found`});
        } else {
            res.status(200).json(bus);
        }
    } catch (error) {
        res.status(400).json({message: `Bus ID :${id} not found`});
    }
}

// delete bus by id
async function deleteBusByID(req, res, next) {
    let id = req.params["id"];
    try {
        let bus = await busService.deleteBus(id);
        if (!bus) {
            res.status(400).json({ message: `Bus ID :${id} not found` });
        } else {
            res.status(200).json(bus);
        }
    } catch (error) {
        res.status(400).json({ message: `Bus ID :${id} not found` });
    }
}

module.exports = {
    getAllBus,
    getBusByID,
    createNewBus,
    updateBusByID,
    deleteBusByID,
};