const jwt = require("jsonwebtoken");
const Candidate = require("../models/candidateModel");
const Recruiter = require("../models/recruiterModel");

const protectCandidate = async (req, res, next) => {
  let token;
  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        token = req.headers.authorization.split(" ")[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // get candidate from the token
        req.candidate = await Candidate.findById(decoded.id).select(
          "-password"
        );

        next();
      } catch (err) {
        res.status(401);
        throw new Error("Not authorized");
      }
    }

    if (!token) {
      res.status(401);
      throw new Error("Not authorized, no token");
    }
  } catch (err) {
    next(err);
  }
};

const protecRecruiter = async (req, res, next) => {
  let token;
  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        token = req.headers.authorization.split(" ")[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // get candidate from the token
        req.recruiter = await Recruiter.findById(decoded.id).select(
          "-password"
        );

        next();
      } catch (err) {
        res.status(401);
        throw new Error("Not authorized");
      }
    }

    if (!token) {
      res.status(401);
      throw new Error("Not authorized, no token");
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  protectCandidate,
  protecRecruiter,
};
