const express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./database/connectdb");
const cors = require("cors");
const morgan = require("morgan");
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

app.listen(process.env.PORT, () => {
  console.log("Server is running at 5000");
});
