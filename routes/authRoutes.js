const express = require("express");
const authController = require("../controller/authController");

const authRouter = express.Router();

authRouter.post("/register", authController.register);

module.exports = authRouter;
