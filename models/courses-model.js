import mongoose from "mongoose";


const courseschema = mongoose.Schema(


{
type : {
    type : String,
    required :true
},
title : {
    type : String,
    required :true
},
subtitle : {
    type : String,
    required :true
},
paragraph : {
    type : String,
    required :true
},

}

)


export const CursesModel = mongoose.model("courses-list",courseschema)

