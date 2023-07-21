const { validationResult } = require("express-validator");

module.exports = (req, res) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.status(400).json({
      message: "Input contains some errors.",
      errors: validationErrors.array(),
    });
  }
};
