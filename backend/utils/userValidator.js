const { body } = require("express-validator");

exports.user = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name field cannot be empty!")
    .isLength({ min: 3, max: 100 })
    .withMessage(
      "Name field must contain minimum 3 letters and maximum 100 letters!"
    )
    .isAlpha("en-US", { ignore: " " })
    .withMessage(
      "Name field cannot contain any numbers or special characters!"
    ),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email field cannot be empty!")
    .normalizeEmail()
    .isEmail()
    .withMessage("Invalid email address!"),

  body("age")
    .trim()
    .notEmpty()
    .withMessage("Age field cannot be empty!")
    .isInt({ min: 1, max: 130 })
    .withMessage("Age field can only be a whole number between 1 and 130."),
];
