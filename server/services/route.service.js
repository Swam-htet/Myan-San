let Route = require("../models/route.model");
const mongoose = require("mongoose");

function removeEmptyKeys(obj, lengthThreshold = 1, keysToRemove = []) {
  const result = { ...obj }; // Create a shallow copy of the object

  // Add specific keys to remove from the object
  const keysToRemoveSet = new Set(keysToRemove);

  for (const key in result) {
    if (
      result.hasOwnProperty(key) &&
      (result[key] === "" ||
        String(result[key]).length <= lengthThreshold ||
        keysToRemoveSet.has(key))
    ) {
      delete result[key];
    }
  }

  return result;
}

async function getAllRoute(params) {
  // let page = params.page;
  // let size = params.size;

  const modifiedParams = removeEmptyKeys(params, 1, [
    "page",
    "size",
    "ticketType",
    "noOfPassenger",
    "date",
  ]);

  // Execute the query with population
  const routes = await Route.find(modifiedParams)
    .populate("fromTown")
    .populate("toTown")
    .populate({
      path: "bus",
      populate: {
        path: "company",
        model: "Company",
      },
    });
  // .skip((page - 1) * size).limit(size);

  return {
    payload: routes,
    pagination: {
      total_records: routes.length,
      // page: page,
      // size: size,
    },
  };
}

async function getRouteByID(id) {
  return Route.findById(id)
    .populate("fromTown")
    .populate("toTown")
    .populate({
      path: "bus",
      populate: {
        path: "company",
        model: "Company",
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
    seats: Array.from({ length: route.availableSeat }).map((_, index) => {
      return { seatID: `ID-${index + 1}` };
    }),
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
  };
  return Route.findByIdAndUpdate(id, updateBody, { new: true })
    .populate("fromTown")
    .populate("toTown")
    .populate({
      path: "bus",
      populate: {
        path: "company",
        model: "Company",
      },
    });
}

async function deleteRouteByID(id) {
  return Route.findByIdAndDelete(id).populate(["fromTown", "toTown"]);
}

module.exports = {
  getAllRoute,
  getRouteByID,
  createRoute,
  updateRouteByID,
  deleteRouteByID,
};
