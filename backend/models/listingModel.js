const mongoose = require("mongoose");

const listingSchema = mongoose.Schema({
  recruiter: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Recruiter",
  },
  title: {
    type: String,
    required: [true, "Please add a title"],
  },
  location: {
    type: String,
    required: [true, "Please add a location"],
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
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
  applicants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Candidate",
      default: [],
    },
  ],
});

module.exports = mongoose.model("Listing", listingSchema);
