import mongoose from "mongoose";

const modeschema = mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
});

export const Mongoaboutimage = mongoose.model("aboutimage", modeschema);
