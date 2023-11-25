let Ticket = require("../models/ticket.model");

async function getAllTicket() {
    return Ticket.find();
}

async function getTicketByID(id) {
    return Ticket.findById(id);
}

async function createTicket(ticket) {
    let newTicket = new Ticket(ticket);
    return newTicket.save();
}


module.exports = {
    getAllTicket,
    getTicketByID,
    createTicket,
}