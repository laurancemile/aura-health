const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// load our env
dotenv.config({
	path: "./.env",
});

const PORT = process.env.PORT || 3000;

// connect database
const DB = process.env.MONGO_URI.replace(
	"<db_password>",
	process.env.MONGO_PASSWORD,
);

mongoose
	.connect(DB)
	.then(() => console.log("Database connected successfully"))
	.catch((err) => console.log("Database Error: ", err));

app.listen(PORT, () => {
	console.log(`Server running on Port: ${PORT}`);
});
