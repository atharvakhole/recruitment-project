const mongoose = require("mongoose");

const candidateProfileSchema = mongoose.Schema({
  university: {
    type: String,
    required: [true, "Please enter university information"],
  },
  degree: {
    type: String,
    required: [true, "Please enter education information"],
  },

  skills: {
    type: [String],
    required: true,
    validate: {
      validator: function (value) {
        return value.length > 0;
      },
      message: "At least one skill is required.",
    },
  },

  candidate: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Candidate",
  },
});

module.exports = mongoose.model("CandidateProfile", candidateProfileSchema);
