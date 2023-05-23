const Candidate = require("../models/candidateModel");
const Recruiter = require("../models/recruiterModel");
const generateToken = require("./tokenUtility");

// @desc    Get all candidates
// @route   GET /api/candidates
// @acesss  Public
const getCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.status(200).json({
      data: candidates,
    });
  } catch (err) {
    res.status(400).json({
      err,
    });
  }
};

// @desc    Get this candidate
// @route   GET /api/candidates/:id
// @acesss  Public
const getCandidate = async (req, res) => {
  try {
    const candidate = await Candidate.findById(req.params.id);
    res.status(200).json({
      data: candidate,
    });
  } catch (err) {
    res.status(400).json({
      err,
    });
  }
};

// @desc    Create new candidate
// @route   POST /api/candidates
// @acesss  Public

const setCandidate = async (req, res, next) => {
  try {
    const existingUser = await Recruiter.findOne({
      username: req.body.username,
    });

    if (existingUser) {
      res.status(400);
      console.log("1");
      throw new Error("Username not available");
    }

    const candidate = await Candidate.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });

    const data = {
      _id: candidate.id,
      username: candidate.username,
      firstName: candidate.firstName,
      lastName: candidate.lastName,
      type: "candidate",
      token: generateToken(candidate._id),
    };
    res.status(201).send(data);
  } catch (err) {
    if (err.code === 11000) {
      err.message = "Username not available";
      console.log("2");
    }
    next(err);
  }
};

module.exports = { setCandidate, getCandidates, getCandidate };
