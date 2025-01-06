const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../utils/config");

const auth = {
  // Middleware to check if the user is authenticated
  checkAuth: (request, response, next) => {
    console.log(request.cookies);
    const token = request.cookies.token;

    // If the token is not present, send a response
    if (!token) {
      return response.status(401).json({ message: "Unauthorized" });
    }

    try {
      // Verify the token
      const decoded = jwt.verify(token, SECRET_KEY);

      // Set the user id in the request object
      request.userId = decoded.id;

      // Continue with the request
      next();
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  },
};

module.exports = auth;
