const { promisify } = require("util");
const User = require("../models/userModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const jwt = require("jsonwebtoken");

const generateToken = (id) =>
	jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_EXPIRE,
	});

exports.signup = catchAsync(async (req, res) => {
	const newUser = await User.create({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
		passwordConfirm: req.body.passwordConfirm,
	});

	// Generate Token, so they automatically be logged-in
	const token = generateToken(newUser._id);
	newUser.password = undefined;

	res.status(201).json({
		status: "success",
		token,
		data: {
			user: newUser,
		},
	});
});

exports.login = catchAsync(async (req, res, next) => {
	const { email, password } = req.body;

	if (!email || !password) {
		return next(new AppError("Please provide both Email and Password"));
	}

	// Getting password back, since in model we set select:false
	let user = await User.findOne({ email }).select("+password");

	if (!user || !(await user.comparePasswords(password, user.password))) {
		return next(new AppError("Invalid username or password"));
	}

	const token = generateToken(user._id);

	// Not sending password to the user
	user.password = undefined;

	res.status(200).json({
		status: "success",
		token,
		data: {
			user,
		},
	});
});

exports.protect = catchAsync(async (req, res, next) => {
	// 1. Get and Check the token exist
	let token;
	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith("Bearer")
	) {
		token = req.headers.authorization.split(" ")[1];
	}

	if (!token) {
		return next(new AppError("No token provided", 400));
	}

	// 2. Verify the token
	const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

	// 3. Check user still exist (from Database)
	const currentUser = await User.findById(decoded.id);
	if (!currentUser) {
		return next(new AppError("User with this token doesnt exist!", 401));
	}

	// 4. Verify user hasnt change password
	// 5. next

	req.user = currentUser;
	next();
});
