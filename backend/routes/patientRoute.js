const express = require("express");
const {
	registerPatient,
	checkIdNumber,
	createConsultation,
	getPatient,
	getConsultationStats,
} = require("../controllers/patientController");
const { signup, login, protect } = require("../controllers/authController");

const patientRoute = express.Router();

// user routes
patientRoute.route("/signup").post(signup);
patientRoute.route("/login").post(login);

// patient routes
patientRoute.route("/:id").get(getPatient);
patientRoute.route("/register").post(checkIdNumber, registerPatient);
patientRoute.route("/consultations/:patientId").post(createConsultation);
patientRoute.route("/consultations/stats").get(protect, getConsultationStats);

module.exports = patientRoute;
