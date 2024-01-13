let express = require("express");
let router = express.Router();

let ticketController = require("../controllers/ticket.controller");

router.get("/", ticketController.getAllTicket);
router.get("/:id", ticketController.getTicketByID);
router.post("/", ticketController.createTicket);
router.delete("/:id", ticketController.deleteTicketByID);

module.exports = router;
