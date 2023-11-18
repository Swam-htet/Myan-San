// seeder.js
const {faker} = require('@faker-js/faker');
const {User, Customer, BusCompany, Bus, Route, Trip, Booking, Payment} = require('../models/');

const seedData = async () => {
    try {
        // Clear existing data (optional, be careful with this in a production environment)
        await Payment.destroy({where: {}});
        await Booking.destroy({where: {}});
        await Trip.destroy({where: {}});
        await Route.destroy({where: {}});
        await Bus.destroy({where: {}});
        await BusCompany.destroy({where: {}});
        await Customer.destroy({where: {}});
        await User.destroy({where: {}});

        // Generate and insert fake data for User
        const users = [];
        for (let i = 0; i < 10; i++) {
            users.push({
                username: faker.internet.userName(),
                password: faker.internet.password(),
                email: faker.internet.email(),
                role: faker.helpers.arrayElement(['user', 'admin']),
            });
        }
        await User.bulkCreate(users);
        console.log('User data inserted successfully.');

        // Generate and insert fake data for Customer
        const customers = [];
        for (let i = 0; i < 10; i++) {
            customers.push({
                firstName: faker.person.firstName(),
                lastName: faker.person.lastName(),
                contactNumber: faker.phone.number(),
                address: faker.location.streetAddress(),
                userID: faker.number.int({min: 1, max:5})
            });
        }
        await Customer.bulkCreate(customers);
        console.log('Customer data inserted successfully.');

        // Generate and insert fake data for BusCompany
        const busCompanies = [];
        for (let i = 0; i < 5; i++) {
            busCompanies.push({
                companyName: faker.company.name(),
                contactNumber: faker.phone.number(),
                address: faker.location.streetAddress(),
            });
        }
        await BusCompany.bulkCreate(busCompanies);
        console.log('BusCompany data inserted successfully.');

        // Generate and insert fake data for Bus
        const buses = [];
        for (let i = 0; i < 10; i++) {
            buses.push({
                busNumber: faker.number.int({min: 1, max: 20}),
                capacity: faker.number.int({max: 30, min: 10}),
                companyID: faker.number.int({min: 1, max: 5}),
            });
        }
        await Bus.bulkCreate(buses);
        console.log('Bus data inserted successfully.');

        // Generate and insert fake data for Route
        const routes = [];
        for (let i = 0; i < 5; i++) {
            routes.push({
                sourceCity: faker.location.city(),
                destinationCity: faker.location.city(),
                distance: faker.number.int({min: 100, max: 500}),
                duration: faker.number.int({min: 1, max: 5}),
            });
        }
        await Route.bulkCreate(routes);
        console.log('Route data inserted successfully.');

        // Generate and insert fake data for Trip
        const trips = [];
        for (let i = 0; i < 20; i++) {
            trips.push({
                departureDateTime: faker.date.future(),
                arrivalDateTime: faker.date.future(),
                fare: faker.number.int({min: 50, max: 200}),
                busID: faker.number.int({min: 1, max: 10}),
                routeID: faker.number.int({min: 1, max: 5}),
            });
        }
        await Trip.bulkCreate(trips);
        console.log('Trip data inserted successfully.');

        // Generate and insert fake data for Booking
        const bookings = [];
        for (let i = 0; i < 30; i++) {
            bookings.push({
                seatNumber: faker.number.int({min: 1, max: 50}),
                bookingDateTime: faker.date.past(),
                totalFare: faker.number.int({min: 50, max: 200}),
                customerID: faker.number.int({min: 1, max: 10}),
                tripID: faker.number.int({min: 1, max: 20}),
            });
        }
        await Booking.bulkCreate(bookings);
        console.log('Booking data inserted successfully.');

        // Generate and insert fake data for Payment
        const payments = [];
        for (let i = 0; i < 25; i++) {
            payments.push({
                paymentDateTime: faker.date.past(),
                amount: faker.number.int({min: 50, max: 200}),
                paymentMethod: faker.helpers.arrayElement(['credit_card', 'paypal', 'cash']),
                bookingID: faker.number.int({min: 1, max: 30}),
            });
        }
        await Payment.bulkCreate(payments);
        console.log('Payment data inserted successfully.');

        console.log('Seed data insertion completed.');
    } catch (error) {
        console.error('Error seeding data:', error);
    }
};

seedData();