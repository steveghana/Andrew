const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const userRoutes = require("./routes/users.routes");
const createError = require("http-errors");
require("dotenv").config();

//----------------------------------------
//Initialise express app
//----------------------------------------
const app = express();

//----------------------------------------
//Express Middleware
//----------------------------------------
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));

//----------------------------------------
//Routes
//----------------------------------------
app.use("/users", userRoutes);

//----------------------------------------
//404 and Error handler
//----------------------------------------
app.use(async (req, res, next) => {
  next(createError.NotFound("Page was not found"));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

//----------------------------------------
//Ports
//----------------------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`serve at http://localhost:${PORT}`);
});
