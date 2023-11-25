let Route = require("../models/route.model");

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
    let newRoute = new Route(route);
    return newRoute.save();
}

async function updateRouteByID(id, body) {
    return Route.findByIdAndUpdate(id, body, {new: true}).populate(['fromTown', 'toTown']);
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