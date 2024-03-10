import mongoose, { Schema } from "mongoose";
import { JsonWebToken } from "jsonwebtoken";

const videoSchema = new mongoose.Schema({
   videoFile : {} ,
   thumnnail,
   email: {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User"
   },
   title : {
    type : String,
    required : [true, "Title can't be blanck"]
   },
   description : {
    type : String,
    required : true
   },
   duration: {
    type : Number,
    required : true
   },
   views: {
    type : Number,
    default : 0
   },
   owner : {
    type : Schema.Types.ObjectId,
    ref : "User"
   },
   isPublished: {
    type : Boolean,
    default :false
   }
}, {timestamps:true})



export const Video = mongoose.model("Video", videoSchema)