let Ticket = require("../models/ticket.model");
let Route = require("../models/route.model");


async function getAllTicket() {
    return Ticket.find();
}

async function getTicketByID(id) {
    return Ticket.findById(id);
}

async function createTicket(ticket) {

    let route = await Route.findById(ticket.route);

    let newTicket = new Ticket({
        customer: ticket.customer,
        route: ticket.route,
        seats: ticket.selectedSeat,
    });

    let updatedSeats = route.seats.map(seat => {
        if (ticket.selectedSeat.map(seat => seat.seatID).includes(seat.seatID)) {
            return {
                seatID: seat.seatID,
                _id: seat._id,
                available: false
            };
        }
        return seat;
    });

    let newRouteBody = {
        toTown: route.toTown,
        fromTown: route.fromTown,
        scheduleDate: route.scheduleDate,
        availableSeat: 30 - newTicket.seats.length,
        seats: updatedSeats,
        bus: route.bus,
    }
    await Route.findByIdAndUpdate(ticket.route, newRouteBody, {new: true});

    return newTicket.save();
}


module.exports = {
    getAllTicket,
    getTicketByID,
    createTicket,
}