const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.controllers");

router.get("/", usersController.fetch_users);

module.exports = router;
