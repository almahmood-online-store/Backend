import express from "express";
import payload from "payload";
import Cors from "cors"; // Importing the CORS library

require("dotenv").config();
const app = express();

// Redirect root to Admin panel
app.get("/", (_, res) => {
	res.redirect("/admin");
});

const start = async () => {
	// CORS configuration to allow requests from your frontend
	app.use(
		Cors({
			origin: "http://localhost:8081", // Allow the frontend to access the backend
			methods: ["GET", "POST", "OPTIONS"], // Allowed methods for CORS
			credentials: true, // Allowing credentials is crucial for your setup
		})
	);
	// Initialize Payload
	await payload.init({
		secret: process.env.PAYLOAD_SECRET,
		express: app,
		onInit: async () => {
			payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
		},
	});

	// Add your own express routes here

	app.listen(3000);
};

start();
