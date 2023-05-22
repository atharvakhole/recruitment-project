const express = require("express");
const router = express.Router();
const {
  getRecruiters,
  setRecruiter,
  updateRecruiter,
} = require("../controllers/recruiterController");

router.get("/", getRecruiters);

router.post("/", setRecruiter);

router.put("/:id", updateRecruiter);

module.exports = router;
