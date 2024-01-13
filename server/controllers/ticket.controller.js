const ticketService = require("../services/ticket.service");

async function getAllTicket(req, res, next) {
  try {
    let ticket = await ticketService.getAllTicket();
    if (ticket) {
      res.status(200).json(ticket);
    } else {
      res.status(400).json({ message: "Ticket not found" });
    }
  } catch (error) {
    res.status(400).json({ message: `Ticket not found` });
  }
}

async function getTicketByID(req, res, next) {
  let id = req.params.id;

  try {
    let ticket = await ticketService.getTicketByID(id);
    if (!ticket) {
      res.status(400).json({ message: `Ticket ID :${id} not found` });
    } else {
      res.status(200).json(ticket);
    }
  } catch (error) {
    res.status(400).json({ message: `Ticket ID :${id} not found` });
  }
}

async function createTicket(req, res, next) {
  let body = req.body;
  try {
    let ticket = await ticketService.createTicket(body);
    if (!ticket) {
      res.status(400).json({ message: `Can't save Ticket` });
    } else {
      res
        .status(201)
        .json({ message: "Ticket Order Success", payload: ticket });
    }
  } catch (error) {
    res.status(400).json({ message: `Can't save Ticket` });
  }
}

async function deleteTicketByID(req, res, next) {
  let id = req.params.id;

  try {
    let ticket = await ticketService.deleteTicketByID(id);
    if (ticket) {
      res.status(200).json(ticket);
    } else {
      res.status(400).json({ message: "Ticket not found" });
    }
  } catch (error) {
    res.status(400).json({ message: `Ticket not found` });
  }
}

module.exports = {
  getAllTicket,
  getTicketByID,
  createTicket,
  deleteTicketByID,
};
