const app = require("./app");
const mongoose = require("mongoose");
const { MONGODB_URL, PORT } = require("./utils/config");

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB...");

    app.listen(PORT, () => {
      console.log(`Server is running @ http://localhost:3001`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB", error);
  });
