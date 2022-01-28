//check username ,password in post(login) request
//if exist create new JWT
//send back to front-end for validation and protected routes

//set up authentication so only the request with the JWT can access the dashboard
require("dotenv").config();
const jwt = require("jsonwebtoken");
const CustomAPIError = require("../errors/custom-error");

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new CustomAPIError("Please provide email and password", 400);
  }
  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res
    .status(200)
    .json({ message: `User created, Welcome,${username}.`, token });
};

const dashboard = async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new CustomAPIError("No token provided", 401);
  } else {
    res.json({ message: "working" });
  }
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    message: `Hello, John Doe`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
