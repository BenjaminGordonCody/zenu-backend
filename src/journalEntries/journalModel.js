const mongoose = require("mongoose");

const diarySchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Number,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

const Diary = mongoose.model("Diary", diarySchema);

module.exports = Diary;
