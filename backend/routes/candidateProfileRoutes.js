const express = require("express");
const router = express.Router();
const { protectCandidate } = require("../middleware/authMiddleware");
const {
  getCandidateProfiles,
  createProfile,
  getMyProfile,
} = require("../controllers/candidateProfileController");

router.get("/", getCandidateProfiles);
router.post("/", protectCandidate, createProfile);
router.get("/my", protectCandidate, getMyProfile);

module.exports = router;
