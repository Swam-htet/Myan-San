// Import necessary modules from Sequelize
const {DataTypes} = require('sequelize');

const sequelize = require("../config/db.js");


// Define the User model
const User = sequelize.define('User', {
    userID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Define the Customer model
const Customer = sequelize.define('Customer', {
    customerID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contactNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Define the BusCompany model
const BusCompany = sequelize.define('BusCompany', {
    companyID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    companyName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contactNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Define the Bus model
const Bus = sequelize.define('Bus', {
    busID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    busNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    capacity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

// Define the Route model
const Route = sequelize.define('Route', {
    routeID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    sourceCity: {
        type: DataTypes.STRING,
        allowNull: false
    },
    destinationCity: {
        type: DataTypes.STRING,
        allowNull: false
    },
    distance: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

// Define the Trip model
const Trip = sequelize.define('Trip', {
    tripID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    departureDateTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    arrivalDateTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    fare: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
});

// Define the Booking model
const Booking = sequelize.define('Booking', {
    bookingID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    seatNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    bookingDateTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    totalFare: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
});

// Define the Payment model
const Payment = sequelize.define('Payment', {
    paymentID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    paymentDateTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    paymentMethod: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Define associations between the models
User.hasOne(Customer, { foreignKey: 'userId' });
Customer.belongsTo(User, { foreignKey: 'userId' });

BusCompany.hasMany(Bus, { foreignKey: 'companyId' });
Bus.belongsTo(BusCompany, { foreignKey: 'companyId' });

Bus.hasMany(Trip, { foreignKey: 'busId' });
Trip.belongsTo(Bus, { foreignKey: 'busId' });

Route.hasMany(Trip, { foreignKey: 'routeId' });
Trip.belongsTo(Route, { foreignKey: 'routeId' });

Customer.hasMany(Booking, { foreignKey: 'customerId' });
Booking.belongsTo(Customer, { foreignKey: 'customerId' });

Trip.hasMany(Booking, { foreignKey: 'tripId' });
Booking.belongsTo(Trip, { foreignKey: 'tripId' });

Booking.hasOne(Payment, { foreignKey: 'bookingId' });
Payment.belongsTo(Booking, { foreignKey: 'bookingId' });


// Export the models for use in other parts of the application
module.exports = {
    User,
    Customer,
    BusCompany,
    Bus,
    Route,
    Trip,
    Booking,
    Payment
};