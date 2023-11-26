let Route = require("../models/route.model");
const {faker} = require("@faker-js/faker");

async function getAllRoute() {
    let routes = await Route.find().populate('fromTown')
        .populate('toTown')
        .populate({
            path: 'bus',
            populate: {
                path: 'company',
                model: 'Company',
            },
        });
    return routes;
}

async function getRouteByID(id) {
    return Route.findById(id).populate('fromTown')
        .populate('toTown')
        .populate({
            path: 'bus',
            populate: {
                path: 'company',
                model: 'Company',
            },
        });
}

async function createRoute(route) {
    let newRoute = new Route({
        toTown: route.toTown,
        fromTown: route.fromTown,
        scheduleDate: route.scheduleDate,
        availableSeat: route.availableSeat,
        bus: route.bus,
        seats: Array.from({length: route.availableSeat}).map((_, index) => {
            return {seatID: `ID-${index + 1}`}
        })

    });
    return newRoute.save();
}

async function updateRouteByID(id, body) {
    let oldRoute = await Route.findById(id);
    let updateBody = {
        toTown: body.toTown,
        fromTown: body.fromTown,
        scheduleDate: body.scheduleDate,
        availableSeat: oldRoute.availableSeat,
        seats: oldRoute.seats,
        bus: body.bus,
    }
    return Route.findByIdAndUpdate(id, updateBody, {new: true}).populate('fromTown')
        .populate('toTown')
        .populate({
            path: 'bus',
            populate: {
                path: 'company',
                model: 'Company',
            },
        });
}

async function deleteRouteByID(id) {
    return Route.findByIdAndDelete(id).populate(['fromTown', 'toTown']);
}

module.exports = {
    getAllRoute,
    getRouteByID,
    createRoute,
    updateRouteByID,
    deleteRouteByID
}