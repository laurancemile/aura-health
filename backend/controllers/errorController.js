const AppError = require("../utils/appError");

const handleCastError = (err) => {
	const message = `Invalid ${err.path}: ${err.value}`;
	return new AppError(message, 400);
};

const handleJsonWebTokenError = (err) => {
	return new AppError(`Invalid token: ${err.message}`, 401);
};

const handleTokenExpired = () => {
	return new AppError("Token has expired", 401);
};

const handleDuplicateError = (err) => {
	const value = err.errorResponse.errmsg.match(/"(.*?)"/)[0];
	const message = `Duplicate field value: ${value}. Please use another value!`;
	return new AppError(message, 400);
};

const sendErrorDev = (err, res) => {
	res.status(err.statusCode).json({
		status: err.status,
		message: err.message,
		stack: err.stack,
		error: err,
	});
};

const sendErrorPro = (err, res) => {
	if (err.isOperational) {
		res.status(err.statusCode).json({
			status: err.status,
			message: err.message,
		});
	} else {
		console.log("Error 💣: ", err);
		res.status(500).json({
			status: "error",
			message: "Something went wrong ",
		});
	}
};

const globalErrorHandler = (err, req, res, next) => {
	err.status = err.status || "error";
	err.statusCode = err.statusCode || 500;

	if (process.env.NODE_ENV === "production") {
		// if we have cast errors
		let error = { ...err };
		error.name = err.name;
		error.message = err.message;
		error.status = err.status;
		error.statusCode = err.statusCode;
		error.isOperational = err.isOperational;

		if (error.name === "CastError") error = handleCastError(error);
		if (error.code === 11000) error = handleDuplicateError(error);
		if (error.name === "JsonWebTokenError")
			error = handleJsonWebTokenError(error);
		if (error.name === "TokenExpiredError") error = handleTokenExpired(error);

		sendErrorPro(error, res);
	} else if (process.env.NODE_ENV === "development") {
		sendErrorDev(err, res);
	}
};

module.exports = globalErrorHandler;
