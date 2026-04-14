const runTriage = (data) => {
	let triageStatus = "";
	const {
		physicalSignals: { temperature },
		socialSignals: { livingConditions },
	} = data;

	if (temperature > 39 || livingConditions === "unstable") {
		return (triageStatus = "red");
	} else if (temperature > 37.5 && temperature <= 39) {
		return (triageStatus = "yellow");
	} else {
		return (triageStatus = "green");
	}
};

module.exports = runTriage;
