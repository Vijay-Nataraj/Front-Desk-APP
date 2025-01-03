const express = require("express");
const mongoose = require("mongoose");
const { MONGODB_URL, PORT } = require("./utils/config");

const app = express();

app.get("/", (request, response) => {
  response.json({ message: "Hello World!" });
});

app.listen(PORT, () => {
  console.log(`Server is running @ http://localhost:3001`);
});

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB...");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB", error);
  });
