const routeService = require("../services/route.service");

async function getAllRoute(req, res, next) {
    try {
        let routes = await routeService.getAllRoute();
        if (routes) {
            res.status(200).json(routes);
        } else {
            res.status(400).json({message: "Route not found"});
        }
    } catch (error) {
        res.status(400).json({message: `Route not found`});
    }

}

async function getRouteByID(req, res, next) {
    let id = req.params.id;

    try {
        let route = await routeService.getRouteByID(id);
        if (!route) {
            res.status(400).json({message: `Route ID :${id} not found`});
        } else {
            res.status(200).json(route);
        }
    } catch (error) {
        res.status(400).json({message: `Route ID :${id} not found`});
    }
}

async function createRoute(req, res, next) {
    let body = req.body;
    try {
        let route = await routeService.createRoute(body);
        if (!route) {
            res.status(400).json({message: `Can't save route`});
        } else {
            res.status(201).json(route);
        }
    } catch (error) {
        res.status(400).json({message: `Can't save bus`});
    }
}

async function updateRouteByID(req, res, next) {
    let id = req.params.id;
    let updateBody = req.body;
    try {
        let route = await routeService.updateRouteByID(id, updateBody);
        if (!route) {
            res.status(400).json({message: `Route ID :${id} not found`});
        } else {
            res.status(200).json(route);
        }
    } catch (error) {
        res.status(400).json({message: `Route ID :${id} not found`});
    }
}

async function deleteRouteByID(req, res, next) {
    let id = req.params.id;
    try {
        let route = await routeService.deleteRouteByID(id);
        if (!route) {
            res.status(400).json({message: `Route ID :${id} not found`});
        } else {
            res.status(200).json(route);
        }
    } catch (error) {
        res.status(400).json({message: `Route ID :${id} not found`});
    }
}

module.exports = {
    getAllRoute,
    getRouteByID,
    createRoute,
    updateRouteByID,
    deleteRouteByID,
}