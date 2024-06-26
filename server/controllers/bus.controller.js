const busService = require("../services/bus.service");

// get all buses
async function getAllBus(req, res, next) {
  try {
    let buses = await busService.getAllBus();
    if (buses) {
      res.status(200).json(buses);
    } else {
      res.status(400).json({ message: "Bus not found" });
    }
  } catch (error) {
    res.status(400).json({ message: `Bus not found` });
  }
}

// get bus by id
async function getBusByID(req, res, next) {
  let id = req.params.id;

  try {
    let store = await busService.getBusByID(id);
    if (!store) {
      res.status(400).json({ message: `Bus ID :${id} not found` });
    } else {
      res.status(200).json(store);
    }
  } catch (error) {
    res.status(400).json({ message: `Bus ID :${id} not found` });
  }
}

// create store
async function createBus(req, res, next) {
  let body = req.body;
  try {
    let bus = await busService.createBus(body);
    if (!bus) {
      res.status(400).json({ message: `Can't save bus` });
    } else {
      res.status(201).json(bus);
    }
  } catch (error) {
    res.status(400).json({ message: `Can't save bus` });
  }
}

// update store by id
async function updateBusByID(req, res, next) {
  let id = req.params.id;
  let updateBody = req.body;
  try {
    let bus = await busService.updateBusByID(id, updateBody);
    if (!bus) {
      res.status(400).json({ message: `Bus ID :${id} not found` });
    } else {
      res.status(200).json(bus);
    }
  } catch (error) {
    res.status(400).json({ message: `Bus ID :${id} not found` });
  }
}

// delete store by id
async function deleteBusByID(req, res, next) {
  let id = req.params.id;
  try {
    let bus = await busService.deleteBusByID(id);
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
  createBus,
  updateBusByID,
  deleteBusByID,
};
