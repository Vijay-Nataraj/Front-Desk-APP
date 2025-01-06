const express = require("express");
const authRouter = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json()); // parse the request body to json

app.use(cookieParser()); // parse the cookies

app.use("/auth", authRouter);

module.exports = app;
