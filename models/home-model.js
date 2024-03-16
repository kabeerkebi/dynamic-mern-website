import mongoose from "mongoose";
const homeschema = mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  paragraph: {
    type: String,
    required: true,
  },
  title2: {
    type: String,
    required: true,
  },
  paragraph2: {
    type: String,
    required: true,
  },
  skill1: {
    type: String,
    required: true,
  },
  skill2: {
    type: String,
    required: true,
  },
  skill3: {
    type: String,
    required: true,
  },
  skill4: {
    type: String,
    required: true,
  },
  skill5: {
    type: String,
    required: true,
  },
  skill6: {
    type: String,
    required: true,
  },
});

export const HomeModel = mongoose.model("home-list",homeschema);
