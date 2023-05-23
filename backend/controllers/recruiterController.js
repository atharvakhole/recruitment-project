const Recruiter = require("../models/recruiterModel");
const Candidate = require("../models/candidateModel");
const generateToken = require("./tokenUtility");

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
    const existingUser = await Candidate.findOne({
      username: req.body.username,
    });

    if (existingUser) {
      res.status(400);
      throw new Error("Username not available");
    }

    const recruiter = await Recruiter.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      type: "recruiter",
      companyName: req.body.companyName,
    });

    const data = {
      _id: recruiter.id,
      username: recruiter.username,
      firstName: recruiter.firstName,
      lastName: recruiter.lastName,
      token: generateToken(recruiter._id),
    };
    res.status(201).send(data);
  } catch (err) {
    if (err.code === 11000) {
      err.message = "Username not available";
    }
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
