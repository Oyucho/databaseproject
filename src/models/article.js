const mongoose = require("mongoose");

const Article = mongoose.model("Article", {
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

module.exports = Article;
