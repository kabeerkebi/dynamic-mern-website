import mongoose from "mongoose";
const aboutschema = mongoose.Schema({
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
});

export const AboutModel = mongoose.model("about-list", aboutschema);
