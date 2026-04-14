const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const globalErrorHandler = require("./controllers/errorController");
const patientRoute = require("./routes/patientRoute");
const AppError = require("./utils/appError");

const app = express();

// middlewares
app.set("query parser", "extended");
app.use(express.json());
app.use(cors());
if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

// routes
app.use("/api/v1/patients", patientRoute);
app.use("/api/v1/users", patientRoute);

// default, for undandled routes
app.use((req, res, next) => {
	next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// global middleware error handler
app.use(globalErrorHandler);

module.exports = app;
