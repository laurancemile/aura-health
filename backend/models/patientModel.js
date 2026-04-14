const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema(
	{
		firstName: { type: String, required: true, trim: true },
		lastName: { type: String, required: true, trim: true },
		idNumber: { type: String, required: true, unique: true }, // Main identifier for the patient, must be unique
		dateOfBirth: Date,
		gender: { type: String, enum: ["male", "female", "other"] },
		contactNumber: String,
		homeAddress: String, // for mapping "Social Determinants"
		createdAt: { type: Date, default: Date.now },
	},
	{
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
	},
);

PatientSchema.virtual("consultations", {
	ref: "Consultation",
	localField: "_id",
	foreignField: "patient",
});

const Patient = mongoose.model("Patient", PatientSchema);

module.exports = Patient;
