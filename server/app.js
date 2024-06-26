// node modules import
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");
let cors = require("cors");
let dotenv = require("dotenv");
const mongoose = require("mongoose");

// custom middleware imports
let middleware = require("./middleware/");

// route imports
let indexRouter = require("./routes/index");
let staffRouter = require("./routes/staff.route");
let busRouter = require("./routes/bus.route");
let companyRouter = require("./routes/company.route");
let townRouter = require("./routes/town.route");
let travelRouter = require("./routes/route.route");
let ticketRouter = require("./routes/ticket.route");
let faqRouter = require("./routes/faq.route");
let feedbackRouter = require("./routes/feedback.route");

const { checkRole, verifyUserToken } = require("./middleware");

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
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

// db configuration
mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB atlas connected");
  })
  .catch(console.log);

// open routes
app.use("/", indexRouter);
app.use("/api", indexRouter);
app.use("/api/staff", staffRouter);

// auth middleware test
// app.use(verifyUserToken, checkRole("admin"));

// authenticated routes
app.use("/api/buses", busRouter);
app.use("/api/companies", companyRouter);
app.use("/api/towns", townRouter);
app.use("/api/routes", travelRouter);
app.use("/api/tickets", ticketRouter);
app.use("/api/faqs", faqRouter);
app.use("/api/feedbacks", feedbackRouter);

// catch 404 and forward to error handler
app.use(middleware.NotFound);

// error handler
app.use(middleware.ErrorHandler);

module.exports = app;
