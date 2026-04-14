const mongoose = require("mongoose");

const ConsultationSchema = new mongoose.Schema({
	patient: { type: mongoose.Schema.ObjectId, ref: "Patient" },
	physicalSignals: {
		bloodPressure: { type: String, required: true },
		temperature: { type: Number, required: true },
		heartRate: { type: String, required: true },
		oxygenSaturation: { type: String },
	},
	socialSignals: {
		livingConditions: { type: String, required: true },
		foodSecurity: String,
		employmentStatus: { type: String, enum: ["employed", "unemployed"] },
	},
	triageStatus: { type: String, enum: ["red", "yellow", "green"] },
	notes: String,
	createdAt: { type: Date, default: Date.now },
});

const Consultation = mongoose.model("Consultation", ConsultationSchema);

module.exports = Consultation;
