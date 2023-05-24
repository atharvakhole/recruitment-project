const Candidate = require("../models/candidateModel");
const CandidateProfile = require("../models/candidateProfileModel");
const Recruiter = require("../models/recruiterModel");
const generateToken = require("./tokenUtility");

// @desc    Get all profiles
// @route   GET /api/profiles
// @acesss  Public
const getCandidateProfiles = async (req, res) => {
  try {
    const profiles = await CandidateProfile.find();
    res.status(200).json({
      data: profiles,
    });
  } catch (err) {
    res.status(400).json({
      err,
    });
  }
};

// @desc    create new profile
// @route   POST /api/profiles
// @acesss  Protected
const createProfile = async (req, res, next) => {
  try {
    const existingProfile = await CandidateProfile.findOne({
      candidate: req.candidate._id,
    });
    if (existingProfile) {
      res.status(400);
      throw new Error("Profile already exists");
    }
    console.log(req.body);
    const profile = await CandidateProfile.create({
      university: req.body.university,
      degree: req.body.degree,
      skills: req.body.skills,
      candidate: req.candidate._id,
    });

    res.status(200).json(profile);
    next();
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = {
  getCandidateProfiles,
  createProfile,
};
