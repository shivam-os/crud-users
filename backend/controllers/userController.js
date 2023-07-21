const User = require("../models/user");
const validationErrors = require("../utils/validationErrors");

//GET method to return all users
exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find().sort({_id: -1});
    const total = await User.countDocuments();
    return res.status(200).json({ total, users });
  } catch (err) {
    next(err);
  }
};

//GET method to return a user with given id
exports.getSingleUser = async (req, res, next) => {
  try {
    const existingUser = await User.findById(req.params.id);
    
    if (!existingUser) {
      return res.status(404).json({ msg: "User with given id doesn't exist." });
    }

    return res.status(200).json({ existingUser });
  } catch (err) {
    next(err);
  }
};

//POST method to create a new user
exports.createUser = async (req, res, next) => {
  if (validationErrors(req, res)) {
    return 
  }

  try {
    const { name, email, age } = req.body;
    const createdUser = await User.create({ name, email, age });
    return res.status(200).json({ msg: "User created successfully!", createdUser });
  } catch (err) {
    next(err);
  }
};

//PUT method to update an existing user with given id
exports.updateUser = async (req, res, next) => {
  if (validationErrors(req, res)) {
    return 
  }

  try {
    const { name, email, age } = req.body;
    const updatedUser = await User.findByIdAndUpdate(req.params.id, {
      name,
      email,
      age,
    });

    if (!updatedUser) {
      return res.status(404).json({ msg: "User with given id doesn't exist." });
    }

    return res.status(200).json({ msg: "User updated successfully!", updatedUser });
  } catch (err) {
    next(err);
  }
};

//DELETE method to delete an existing user with given id
exports.deleteUser = async (req, res, next) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({ msg: "User with given id doesn't exist." });
    }

    return res
      .status(200)
      .json({ msg: "User with given id deleted successfully!" });
  } catch (err) {
    next(err);
  }
};
