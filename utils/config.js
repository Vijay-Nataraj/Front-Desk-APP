require("dotenv").config();

const MONGODB_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT;
const SECRET_KEY = process.env.SECRET_KEY;

module.exports = {
  MONGODB_URL,
  PORT,
  SECRET_KEY,
};
