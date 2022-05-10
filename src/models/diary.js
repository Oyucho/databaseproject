const mongoose = require("mongoose");

const Diary = mongoose.model("Diary", {
  title: {
    type: String,
    required: true,
    trim: true,
  },
  input: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: String,
    required: true,
    trim: true,
  },
});
