import mongoose from "mongoose";

const modeschem = mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
    
});

export const Mongohomeimage = mongoose.model("homeimage", modeschem);
