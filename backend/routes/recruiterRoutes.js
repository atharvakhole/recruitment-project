const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Recruiters[]",
  });
});

router.post("/", (req, res) => {
  res.status(200).json({
    message: "New recruiter created",
  });
});

router.put("/:id", (req, res) => {
  res.status(200).json({
    message: `Update recruiter ${req.params.id}`,
  });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({
    message: `Delete recruiter ${req.params.id}`,
  });
});
module.exports = router;
