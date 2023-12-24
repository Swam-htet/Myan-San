let {faker, fa, ro} = require('@faker-js/faker');
let mongoose = require('mongoose');
let dotenv = require("dotenv");
const bcrypt = require("bcrypt");

dotenv.config();


// clear data from model
async function clearModelData(model) {
    try {
        await model.deleteMany({});
        console.log(`All data cleared from the ${model.modelName} model`);
    } catch (error) {
        console.error(`Error clearing data from the ${model.modelName} model:`, error);
    }
}

// db configuration
mongoose
    .connect(process.env.DB, {
        useNewUrlParser: true, useUnifiedTopology: true,
    })
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch(console.log);

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));


db.once('open', async () => {


    // clear data from models
    const Staff = require('../models/staff.model.js');
    await clearModelData(Staff);

    const Company = require('../models/company.model.js');
    await clearModelData(Company);

    const Bus = require('../models/bus.model.js');
    await clearModelData(Bus);

    const Town = require('../models/town.model.js');
    await clearModelData(Town);

    const Route = require('../models/route.model.js');
    await clearModelData(Route);

    const Ticket = require('../models/ticket.model.js');
    await clearModelData(Ticket);


    // staff fake data insert
    for (let i = 0; i < 20; i++) {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash("password", salt);
        await Staff.create({
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            userName: faker.person.fullName().toLowerCase(),
            dateOfBirth: new Date(),
            startDate: new Date(),
            address: {
                street: faker.location.street(),
                city: faker.location.city(),
                state: faker.location.state(),
                postalCode: faker.location.zipCode(),
                country: faker.location.country()
            },
            password: hashPassword,
            email: faker.internet.email(),
            role: "staff"

        })
    }
    console.log("Staff data inserted");


    // company fake data
    for (let i = 0; i < 10; i++) {

        await Company.create({
            name: faker.company.name(), address: {
                street: faker.location.street(),
                city: faker.location.city(),
                state: faker.location.state(),
                postalCode: faker.location.zipCode(),
                country: faker.location.country()
            },

        })
    }
    console.log("Company data inserted");

    // bus fake data
    for (let i = 0; i < 30; i++) {

        let companies = await Company.find();
        await Bus.create({
            registrationNumber: faker.vehicle.vin(),
            make: faker.vehicle.manufacturer(),
            model: faker.vehicle.model(),
            year: faker.date.past().getFullYear(),
            driver: {
                name: faker.person.fullName(), licenseNumber: faker.vehicle.vin()
            },
            class: faker.helpers.arrayElement(['First Class', 'Business Class', "Economy Class", "Sleeper Bus"]),
            company: faker.helpers.arrayElement(companies.map(company => company._id))
        })
    }
    console.log("Bus data inserted");


    // town fake data
    for (let i = 0; i < 20; i++) {
        await Town.create({
            name: faker.location.city(), station: faker.location.streetAddress(),
        })
    }
    console.log("Town data inserted");


    // route fake data
    for (let i = 0; i < 20; i++) {
        let townList = [...await Town.find()].map(town => town._id);
        let toTownID = faker.helpers.arrayElement(townList);
        let fromTownID = faker.helpers.arrayElement(townList.filter(id => id !== toTownID));
        let availableSeat = 30;
        let seatList = Array.from({length: availableSeat}).map((_, index) => {
            return {seatID: `ID-${index + 1}`}
        })
        let busList = [...await Bus.find()].map(bus => bus._id);
        await Route.create({
            toTown: toTownID,
            fromTown: fromTownID,
            scheduleDate: new Date,
            availableSeat: 30,
            seats: seatList,
            bus: faker.helpers.arrayElement(busList),
        })
    }
    console.log("Route data inserted");


    // ticket fake data
    for (let i = 0; i < 30; i++) {
        let routeID = faker.helpers.arrayElement([...await Route.find()].map(route => route._id));
        let randomSeatNumber = Math.floor(Math.random() * 5) + 1;
        let route = await Route.findById(routeID);
        let seats = route.seats;
        let availableSeats = seats.filter(seat => seat.available === true);
        if (randomSeatNumber < availableSeats.length) {
            let selectedSeats = Array.from({length: randomSeatNumber}, () => faker.helpers.arrayElement(availableSeats.map(seat => {
                return {seatID: seat.seatID, _id: seat._id}
            })));

            console.log("Route - ", routeID);
            console.log("Selected seats - ", selectedSeats);

            let updatedSeats = seats.map(seat => {
                if (selectedSeats.map(seat => seat.seatID).includes(seat.seatID)) {
                    return {
                        seatID: seat.seatID,
                        _id: seat._id,
                        available: false
                    };
                }
                return seat;
            })
            // console.log("Updated Seats - ", updatedSeats);

            let updatedRouteBody = {
                toTown: route.toTown,
                fromTown: route.fromTown,
                scheduleDate: route.scheduleDate,
                availableSeat: 30 - randomSeatNumber,
                seats: updatedSeats,
                bus: route.bus,
            }

            // console.log("Updated Route body -", updatedRouteBody);

            await Route.findByIdAndUpdate(routeID, updatedRouteBody, {new: true});

            await Ticket.create({
                customer: {
                    firstName: faker.person.firstName(),
                    lastName: faker.person.lastName(),
                    email: faker.internet.email(),
                    phoneNumber: faker.phone.number(),
                    NRC: `12/${faker.hacker.noun()}(n)00${faker.helpers.rangeToNumber({min: 100, max: 3000})}`,
                    address: {
                        street: faker.location.street(),
                        city: faker.location.city(),
                        state: faker.location.state(),
                        postalCode: faker.location.zipCode(),
                        country: faker.location.country()
                    },
                },
                route: route,
                seats: selectedSeats
            })
        } else {
            console.log("Not Enough Seats");
        }
    }
    console.log("Ticket data inserted");


    db.close();


});


