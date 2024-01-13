let Ticket = require("../models/ticket.model");
let Route = require("../models/route.model");

async function getAllTicket() {
  return Ticket.find().populate({
    path: "route",
    populate: ["fromTown", "toTown", "bus"],
  });
}

async function getTicketByID(id) {
  return Ticket.findById(id).populate({
    path: "route",
    populate: ["fromTown", "toTown", "bus"],
  });
}

async function deleteTicketByID(id) {
  return Ticket.findByIdAndDelete(id).populate({
    path: "route",
    populate: ["fromTown", "toTown", "bus"],
  });
}

async function createTicket(ticket) {
  // get route from Route model
  let route = await Route.findById(ticket.route);
  // console.log("Selected Route - ", route);

  // create new ticket with customer, route and seats list
  let newTicket = new Ticket({
    customer: ticket.customer,
    route: ticket.route,
    seats: ticket.selectedSeat,
  });

  console.log("New ticket - ", newTicket);
  // update seats from route
  let updatedSeats = route.seats.map((seat) => {
    if (ticket.selectedSeat.map((seat) => seat.seatID).includes(seat.seatID)) {
      return {
        seatID: seat.seatID,
        _id: seat._id,
        available: false,
      };
    }
    return seat;
  });
  // console.log("Updated Seats - ", updatedSeats);

  // create new route body
  let newRouteBody = {
    toTown: route.toTown,
    fromTown: route.fromTown,
    scheduleDate: route.scheduleDate,
    availableSeat: route.availableSeat - newTicket.seats.length,
    seats: updatedSeats,
    bus: route.bus,
  };
  // console.log("New Route body - ",newRouteBody);

  // find route by id and update
  await Route.findByIdAndUpdate(ticket.route, newRouteBody, { new: true });

  // save new ticket
  return newTicket.save();
}

module.exports = {
  getAllTicket,
  getTicketByID,
  createTicket,
  deleteTicketByID,
};
