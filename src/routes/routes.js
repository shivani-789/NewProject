const express = require("express");

const router = express.Router();

const userController = require("../controller/authController");


// Register API
router.post("/register", userController.register);
router.post("/login", userController.login);

// Login API
// router.post(
//     "/login",
//     login
// );


module.exports = router;