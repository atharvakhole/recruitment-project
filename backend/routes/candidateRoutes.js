const express = require("express");
const router = express.Router();
const { protectCandidate } = require("../middleware/authMiddleware");
const {
  setCandidate,
  getCandidates,
  getCandidate,
} = require("../controllers/candidateController");

router.get("/", getCandidates);
router.post("/", setCandidate);

router.get("/:id", protectCandidate, getCandidate);

module.exports = router;
