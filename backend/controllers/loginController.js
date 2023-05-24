const Recruiter = require("../models/recruiterModel");
const Candidate = require("../models/candidateModel");
const generateToken = require("./tokenUtility");

const attemptLogin = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    let user = await Candidate.findOne({ username });
    if (user) {
      if (user.password == password) {
        res.status(200).json({
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          role: "candidate",
          token: generateToken(user._id),
        });
      } else {
        res.status(400);
        throw new Error("Invalid credentials");
      }
    } else {
      user = await Recruiter.findOne({ username });
      if (user) {
        if (user.password == password) {
          res.status(200).json({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            role: "recruiter",
            token: generateToken(user._id),
          });
        } else {
          res.status(400);
          throw new Error("Invalid credentials");
        }
      } else {
        res.status(400);
        throw new Error("User not found");
      }
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { attemptLogin };
