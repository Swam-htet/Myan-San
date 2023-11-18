// node modules import
let createError = require("http-errors");
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");
let cors = require("cors");
let dotenv = require("dotenv");

// db config
const sequelize = require("./config/db.js");


// models import
const models = require('./models/');

// custom middleware imports
let middleware = require("./middleware/");


// route imports
let indexRouter = require("./routes/index");
let usersRouter = require("./routes/users.route");
let busRouter = require("./routes/buses.route");



// create express app
let app = express();

// dotenv configuration
dotenv.config();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// middleware setup
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

// db configuration
sequelize.sync({force: false})
    .then(() => {
        console.log('Models synchronized with the database.');
    })
    .catch((error) => {
        console.error('Error synchronizing models:', error);
    });

// open routes
app.use("/", indexRouter);
app.use("/api", indexRouter);
app.use("/api/users", usersRouter);


// auth middleware test
app.use(middleware.verifyUserToken);

// authenticated routes
app.use("/api/buses", busRouter);


// catch 404 and forward to error handler
app.use(middleware.NotFound);

// error handler
app.use(middleware.ErrorHandler);

module.exports = app;
