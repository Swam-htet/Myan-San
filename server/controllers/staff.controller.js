let staffService = require("../services/staff.service.js");
const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");

async function getAllStaff(req, res, next) {
  try {
    let staff = await staffService.getAllStaff();
    if (staff) {
      res.status(200).json(staff);
    } else {
      res.status(400).json({ message: "Staff not found" });
    }
  } catch (error) {
    res.status(400).json({ message: `Staff not found` });
  }
}

async function getStaffByID(req, res, next) {
  let id = req.params.id;
  try {
    let staff = await staffService.getStaffByID(id);
    if (staff) {
      res.status(200).json(staff);
    } else {
      res.status(400).json({ message: `Staff ID:${id}  not found` });
    }
  } catch (error) {
    res.status(400).json({ message: `Staff ID:${id}  not found` });
  }
}

async function creatStaff(req, res, next) {
  let staff_data = req.body;
  try {
    let staff = await staffService.createStaff(staff_data);

    res
      .status(200)
      .send({ newStaff: staff, message: "Staff Account Creation is Success." });
  } catch (e) {
    console.log("Error - ", e);
    res.status(400).send({ message: "Staff already existed" });
  }
}

async function staffLogin(req, res, next) {
  let staffData = req.body;

  try {
    let staff = await staffService.staffLogin(staffData);
    let payload = {
      id: staff._id,
      role: staff.role,
    };
    const options = {
      expiresIn: "1h",
    };

    let token = await jwt.sign(payload, process.env.TOKEN_SECRET, options);
    res
      .status(200)
      .send({
        token,
        message: "Login Success, Taken expires in 1hr",
        role: staff.role,
      });
  } catch (err) {
    console.log(err);
    res.status(401).send({ message: "Invalid Staff" });
  }
}

async function updateStaffByID(req, res, next) {
  let id = req.params.id;
  let body = req.body;

  try {
    let staff = await staffService.updateStaff(id, body);
    res.status(200).send(staff);
  } catch (err) {
    console.log(err);
    res.status(401).send({ message: err.message });
  }
}

async function deleteStaffByID(req, res, next) {
  let id = req.params.id;
  try {
    let staff = await staffService.deleteStaff(id);
    if (staff) {
      res.status(200).json(staff);
    } else {
      res.status(400).json({ message: `Staff ID:${id}  not found` });
    }
  } catch (error) {
    res.status(400).json({ message: `Staff ID:${id}  not found` });
  }
}

// controller export
module.exports = {
  getAllStaff,
  updateStaffByID,
  getStaffByID,
  creatStaff,
  staffLogin,
  deleteStaffByID,
};
