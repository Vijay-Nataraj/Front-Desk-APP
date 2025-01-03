const User = require("../models/User");

const authController = {
  register: async (request, response) => {
    try {
      // get the details from the request body
      console.log(request.body);
      const { name, email, password } = request.body;

      // validate the email
      const user = await User.findOne({ email });

      //if the email is already in use, send a response
      if (user) {
        return response.status(400).json({ message: "Email already in use" });
      }

      //Create a model object
      const newUser = new User({ name, email, password });

      //Save the user to the database
      await newUser.save();

      //Send a response
      response.status(201).json({ message: "Registration successful" });
    } catch (error) {
      response.status(500).json({ massage: error.message });
    }
  },
};

module.exports = authController;
