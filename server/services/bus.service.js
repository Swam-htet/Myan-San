let {Bus, BusCompany} = require("../models/");

// get all bus
async function getAllBus() {
    return Bus.findAll({
        include: [
            {
                model: BusCompany,
                attributes: ['companyID', 'companyName', 'contactNumber', 'address'],
            },
        ],
    });
}

// get bus by id
async function getBusByID(id) {
    let bus = await Bus.findByPk(id, {
        include: [
            {
                model: BusCompany,
                attributes: ['companyID', 'companyName', 'contactNumber', 'address'],
            }
        ]
    });
    // console.log("Bus - ", bus);
    return bus;
}


// create bus
async function createNewBus(bus) {
    let newBus = await Bus.create({
        busNumber: bus.busNumber,
        companyId: bus.companyId,
        capacity: bus.capacity
    });
    return newBus;
}

// update bus by id
async function updateBus(id, body) {
    return Bus.update(body, {
        where: {
            busID: id,
        }
    });
}

// delete bus by id
async function deleteBus(id) {
    let deleteBus = await Bus.destroy({where: {busID: id}});
    console.log("DeleteBus", deleteBus);
    return deleteBus;
}

module.exports = {
    getAllBus,
    getBusByID,
    createNewBus,
    updateBus,
    deleteBus
}