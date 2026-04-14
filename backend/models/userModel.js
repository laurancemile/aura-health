const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: [true, "Please enter your name"],
	},
	email: {
		type: String,
		unique: true,
		lowercase: true,
		required: [true, "Please provide your email"],
		validate: {
			validator: validator.isEmail,
			message: "Please enter a valid emamil address",
		},
	},
	password: {
		type: String,
		minLength: 8,
		select: false,
		required: [true, "Please enter password"],
	},
	passwordConfirm: {
		type: String,
		validate: {
			validator: function (el) {
				return el === this.password;
			},
			message: "Passwords dont match!",
		},
	},
	role: { type: String, enum: ["admin", "doctor", "nurse"] },
});

// document middleware,
// encrypt password
userSchema.pre("save", async function (next) {
	if (!this.isModified("password")) return next();

	this.password = await bcrypt.hash(this.password, 12);
	this.passwordConfirm = undefined;
});

// instance methods, to decrypt password
userSchema.methods.comparePasswords = function (userPassword, dbPassword) {
	return bcrypt.compare(userPassword, dbPassword);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
