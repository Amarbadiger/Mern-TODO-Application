const express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./database/connectdb");
const cors = require("cors");
const morgan = require("morgan");

const path = require("path");

//Load Environment Variabls from .env file
dotenv.config();

const app = express();

// for PORT Requesting
app.use(cors());

//Connect to MongoDB
connectDB();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/vi/user", require("./Routes/userRoutes"));

app.use(express.static(path.join(__dirname, "./client/dist")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/dist/index.html"));
});

app.listen(process.env.PORT, () => {
  console.log("Server is running at 5000");
});
