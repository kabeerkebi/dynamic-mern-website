import mongoose from "mongoose";

const modeschema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

export const Mongocontactimage = mongoose.model("contact", modeschema);
