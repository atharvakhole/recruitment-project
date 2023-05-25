const Candidate = require("../models/candidateModel");
const CandidateProfile = require("../models/candidateProfileModel");
const Recruiter = require("../models/recruiterModel");
const Listing = require("../models/listingModel");

// @desc    Get all listings
// @route   GET /api/listings
// @acesss  Public
const getListings = async (req, res) => {
  try {
    const listings = await Listing.find();
    res.status(200).json({
      data: listings,
    });
  } catch (err) {
    res.status(400).json({
      err,
    });
  }
};

// @desc    Get recruiter listings
// @route   GET /api/listings/my
// @acesss  Private
const getMyListings = async (req, res) => {
  try {
    const myListings = await Listing.find({ recruiter: req.recruiter._id });
    res.status(200).json({
      data: myListings,
    });
  } catch (err) {
    res.status(400).json({
      err,
    });
  }
};

// @desc    Create listing
// @route   POST /api/listings/
// @acesss  Private
const createListing = async (req, res, next) => {
  try {
    const candidates = await CandidateProfile.find();
    let applicants = [];

    // Loop over each candidate
    if (req.body.skills) {
      for (const candidate of candidates) {
        // Check if any skill of the candidate matches the listingSkills
        const matchedSkills = candidate.skills.filter((skill) =>
          req.body.skills.includes(skill)
        );

        // If at least one skill matches, add the candidate to the applicants array
        if (matchedSkills.length > 0) {
          applicants.push(candidate.candidate);
        }
      }
    }

    const listing = await Listing.create({
      recruiter: req.recruiter._id,
      title: req.body.title,
      location: req.body.location,
      description: req.body.description,
      skills: req.body.skills,
      applicants,
    });
    res.status(200).json({
      data: listing,
    });
    next();
  } catch (err) {
    res.status(400);
    next(err);
  }
};

// @desc    Get recruiter listings
// @route   GET /api/listings/:id
// @acesss  Private
const getAllApplicants = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);

    const applicantIDs = listing.applicants;
    let applicants = [];
    for (const value of applicantIDs) {
      const applicant = await Candidate.findById(value);
      const profile = await CandidateProfile.find({ candidate: value });

      applicants.push({ applicant, profile });
    }

    res.status(200).json(applicants);
  } catch (err) {
    res.status(400).json({
      err,
    });
  }
};

module.exports = {
  getListings,
  getMyListings,
  createListing,
  getAllApplicants,
};
