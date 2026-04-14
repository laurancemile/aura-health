const Consultation = require("../models/consultationModel");
const Patient = require("../models/patientModel");
const runTriage = require("../services/triageService");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const { isValidIdNumber } = require("../utils/helpers");

// validate the Id numbers
exports.checkIdNumber = catchAsync((req, res, next) => {
	const idNumber = req.body.idNumber.trim();
	if (
		idNumber.length < 13 ||
		idNumber.length > 13 ||
		!isValidIdNumber(idNumber)
	) {
		return res.status(400).json({
			status: "fail",
			message: "Invalid Id number",
		});
	}
	next();
});

// get patient
exports.getPatient = catchAsync(async (req, res, next) => {
	const patient = await Patient.findById(req.params.id).populate(
		"consultations",
	);

	if (!patient) {
		return next(new AppError("Patient does not exist", 404));
	}

	res.status(200).json({
		status: "success",
		patient,
	});
});

// Register new patient
exports.registerPatient = catchAsync(async (req, res) => {
	const newPatient = await Patient.create(req.body);
	res.status(201).json({
		status: "success",
		message: "Successfully created new Patient",
		data: {
			patient: newPatient,
		},
	});
});

// Create new Consultation for the patient on "visit"
exports.createConsultation = catchAsync(async (req, res) => {
	const patientData = req.body;
	const patientId = req.params.patientId;

	const patient = await Consultation.create({
		...patientData,
		patient: patientId,
		triageStatus: runTriage(patientData), // set the triage based on the physical and social status
	});

	res.status(201).json({
		status: "success",
		message: "Created consultation successfully",
		patient,
	});
});

exports.getConsultationStats = catchAsync(async (req, res, next) => {
	const last24Hours = new Date(Date.now() - 24 * 60 * 60 * 1000);

	const stats = await Consultation.aggregate([
		{
			$match: { createdAt: { $gte: last24Hours } },
		},
		{
			$group: {
				_id: "$triageStatus",
				count: { $sum: 1 },
				avgTemp: { $avg: "$physicalSignals.temperature" },
			},
		},
		{
			$project: {
				_id: 0,
				status: "$_id",
				count: 1,
				avgTemp: { $round: ["$avgTemp", 1] },
			},
		},
		{
			$sort: { count: -1 },
		},
	]);

	res.status(200).json({
		status: "success",
		data: { stats },
	});
});
