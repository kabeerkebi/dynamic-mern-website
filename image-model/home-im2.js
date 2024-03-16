import mongoose from "mongoose";

const modeschem = mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
    
});

export const Mongohomeimage2 = mongoose.model("homeimage2", modeschem);
