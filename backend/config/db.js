const mongoose = require("mongoose");
require("dotenv").config();

//Connect to the database
const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to the database successfully!");
  } catch (err) {
    console.log("Error while connecting to the database:", err);
  }
};
connectToDB();
