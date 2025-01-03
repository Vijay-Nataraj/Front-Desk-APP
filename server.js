const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.json({ message: "Hello World!" });
});

app.listen(3000, () => {
  console.log("Server is running @ http://localhost:3000");
});
