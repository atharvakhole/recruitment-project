//server.js
const express = require("express");
const connectDB = require("./config/db");
const colors = require("colors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const { errorHandler } = require("./middleware/errorMiddleware");

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/recruiters", require("./routes/recruiterRoutes"));

app.use(errorHandler);
app.listen(port, () => console.log(`Server started on port ${port}`));
