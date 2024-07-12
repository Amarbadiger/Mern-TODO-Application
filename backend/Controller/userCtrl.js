const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const helloController = async (req, res) => {
  res.send("Hello world");
};

const registerController = async (req, res) => {
  try {
    //Frist Check for existing User Weather User is Exiting or no
    const user = await userModel.findOne({ email: req.body.email });
    // If user exists, return a response indicating the user already exists
    if (user) {
      res.status(200).send({
        message: "User already exists",
        success: false,
      });
    }

    // Hash the password before saving it to the database
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;

    // Create a new user instance using the userModel and save it to the database
    const newUser = new userModel(req.body);
    await newUser.save();

    // Send a successfully registering message
    res.status(200).send({
      message: "Registration successful !!",
      success: true,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      success: false,
      message: `Register Controller Error: ${error.message}`,
    });
  }
};

//Login Controller

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    //Find a User using email
    const user = await userModel.findOne({ email: email });

    // check if the user present or no
    if (!user) {
      // If user not found, return a response indicating user not found
      return res.status(200).send({
        message: "User Not Found",
        success: false,
      });
    }

    // Compare the password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    //check if the password is correct of no
    if (!isMatch) {
      return res.status(200).send({
        message: "Invaild user or Password",
        success: false,
      });
    }

    res.status(200).send({
      message: "User Logined",
      success: true,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      success: false,
      message: `Login Controller Error: ${error.message}`,
    });
  }
};
module.exports = { helloController, registerController, loginController };
