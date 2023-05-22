const Recruiter = require("../models/recruiterModel");

// @desc    Get all recruiters
// @route   GET /api/recruiters
// @acesss  Public
const getRecruiters = async (req, res) => {
  try {
    const recruiters = await Recruiter.find();
    res.status(200).json({
      data: recruiters,
    });
  } catch (err) {
    res.status(400).json({
      err,
    });
  }
};

// @desc    Create new recruiter
// @route   POST /api/recruiters
// @acesss  Public

//recruiterController.js
const setRecruiter = async (req, res, next) => {
  try {
    if (!req.body.username) {
      res.status(400);
      throw new Error("Please enter a username");
    }

    const recruiter = await Recruiter.create({
      username: req.body.username,
    });

    res.status(201).send({ recruiter });
  } catch (err) {
    next(err);
  }
};

// @desc    Update recruiter
// @route   PUT /api/recruiters/:id
// @acesss  Private
const updateRecruiter = async (req, res, next) => {
  try {
    const recruiter = await Recruiter.findById(req.params.id);

    if (!recruiter) {
      res.status(404);
      throw new Error("Recruiter not found");
    }

    const updatedRecruiter = await Recruiter.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json({
      message: `Updated recruiter ${updatedRecruiter.username}`,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getRecruiters,
  setRecruiter,
  updateRecruiter,
};
