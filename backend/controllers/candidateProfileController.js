const Candidate = require("../models/candidateModel");
const CandidateProfile = require("../models/candidateProfileModel");
const Recruiter = require("../models/recruiterModel");
const Listing = require("../models/listingModel");
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
    const profile = await CandidateProfile.create({
      university: req.body.university,
      degree: req.body.degree,
      skills: req.body.skills,
      candidate: req.candidate._id,
    });

    const listings = await Listing.find();
    console.log(listings);

    for (const listing of listings) {
      const matchedSkills = profile.skills.filter((skill) =>
        listing.skills.includes(skill)
      );

      console.log(matchedSkills);
      console.log(profile.skills, listing.skills);

      if (matchedSkills.length > 0) {
        let applicants = listing.applicants;
        applicants.push(profile.candidate);
        console.log(applicants);
        await Listing.updateOne({ _id: listing._id }, { applicants });
      }
    }

    res.status(200).json(profile);
    next();
  } catch (err) {
    res.status(400);
    console.log(err);
    next(err);
  }
};

// @desc    get profile by userid
// @route   POST /api/profiles/my
// @acesss  Protected
const getMyProfile = async (req, res, next) => {
  try {
    const existingProfile = await CandidateProfile.findOne({
      candidate: req.candidate._id,
    });
    if (!existingProfile) {
      res.status(400);
      throw new Error("Profile not found");
    }

    res.status(200).json(existingProfile);
    next();
  } catch (err) {
    res.status(400);
    next(err);
  }
};

module.exports = {
  getCandidateProfiles,
  createProfile,
  getMyProfile,
};
