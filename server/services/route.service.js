let Route = require("../models/route.model");

async function getAllRoute() {
    let routes = await Route.find().populate(['fromTown','toTown']);
    return routes;

}

async function getRouteByID(id) {
    return Route.findById(id);
}

async function createRoute(route) {
    let newRoute = new Route(route);
    return newRoute.save();
}

async function updateRouteByID(id, body) {
    return Route.findByIdAndUpdate(id, body, {new: true});
}

async function deleteRouteByID(id) {
    return Route.findByIdAndDelete(id);
}

module.exports = {
    getAllRoute,
    getRouteByID,
    createRoute,
    updateRouteByID,
    deleteRouteByID
}