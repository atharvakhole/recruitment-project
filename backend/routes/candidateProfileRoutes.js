const express = require("express");
const router = express.Router();
const { protectCandidate } = require("../middleware/authMiddleware");
const {
  getCandidateProfiles,
  createProfile,
} = require("../controllers/candidateProfileController");

router.get("/", getCandidateProfiles);
router.post("/", protectCandidate, createProfile);

module.exports = router;
