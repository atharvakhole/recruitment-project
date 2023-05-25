const express = require("express");
const router = express.Router();
const {
  protectCandidate,
  protecRecruiter,
} = require("../middleware/authMiddleware");
const {
  getListings,
  getMyListings,
  createListing,
  getAllApplicants,
} = require("../controllers/listingController");

router.get("/", getListings);
router.get("/my", protecRecruiter, getMyListings);

router.post("/", protecRecruiter, createListing);
router.get("/:id", protecRecruiter, getAllApplicants);

module.exports = router;
