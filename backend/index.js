const express = require("express");
const morgan = require("morgan");
const userRoutes = require("./routes/userRoutes");
const errorMiddleware = require("./middlewares/errorMiddleware");
require("dotenv").config();
require("./config/db");

const app = express();
const PORT = process.env.PORT || 8080;
const baseUrl = "/api/v1";

//Required middlewares
app.use(express.json());
app.use(morgan("dev"));

//App routes
app.use(`${baseUrl}/users`, userRoutes);
app.all("*", (req, res) => {
  return res
    .status(400)
    .json({ msg: `Can't find ${req.originalUrl} on the server.` });
});
app.use(errorMiddleware);

//Start the app
app.listen(PORT, () => {
  console.log(`Server is running...`);
});
