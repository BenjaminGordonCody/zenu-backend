const mongoose = require("mongoose");

const diarySchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  }
});

const Diary = mongoose.model("Diary", diarySchema);

module.exports = Diary;
