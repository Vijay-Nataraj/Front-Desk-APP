const authController = {
  register: async (request, response) => {
    try {
      response.json({ message: "Hello World!" });
    } catch (error) {
      response.status(500).json({ massage: error.message });
    }
  },
};

module.exports = authController;
