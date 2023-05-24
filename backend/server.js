//server.js
const express = require("express");
const connectDB = require("./config/db");
const colors = require("colors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const { errorHandler } = require("./middleware/errorMiddleware");
const cors = require("cors");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/recruiters", require("./routes/recruiterRoutes"));
app.use("/api/candidates", require("./routes/candidateRoutes"));
app.use("/api/login", require("./routes/loginRoutes"));
app.use("/api/profiles", require("./routes/candidateProfileRoutes"));

app.use(errorHandler);
app.listen(port, () => console.log(`Server started on port ${port}`));
