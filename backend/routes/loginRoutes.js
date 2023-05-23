const express = require("express");
const router = express.Router();

const { attemptLogin } = require("../controllers/loginController");

router.post("", attemptLogin);

module.exports = router;
