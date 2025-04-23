const express = require("express");
const router = express.Router();
const { register, login, verifyToken, getUser } = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);
router.post("/verify", verifyToken);
router.get("/user/:userId", getUser);

module.exports = router;