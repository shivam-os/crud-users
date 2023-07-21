const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const userValidator = require("../utils/userValidator");

//GET request to return all users
router.get("/", userController.getAllUsers);

//GET request to return a single user with given id
router.get("/:id", userController.getSingleUser);

//POST request to create a new user
router.post("/", userValidator.user, userController.createUser);

//PUT request to update an existing user with given id
router.put("/:id", userValidator.user, userController.updateUser);

//DELETE request to delete an existing user with given id
router.delete("/:id", userController.deleteUser);

module.exports = router;
