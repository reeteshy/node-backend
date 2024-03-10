import mongoose, { plugin } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import { Jwt } from "jsonwebtoken";
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        unique: true,
        required : true,
        lowercase : true,
        trim: true,
        index : true
    },
    email : {
        type : String,
        unique: true,
        required : true,
        lowercase : true,
        trim: true
    },
    fullname : {
        type : String,
        required : true,
        trim: true
    },
    avatar : {
        type : String, //cloudnary service
        required : true,
    },
    coverImage : {
        type : String //cloudnary service
    },
    watchHistory : [{
        type : mongoose.Schema.ObjectId,
        ref : "Video"
    }],
    password : {
        type : String,
        required : [true, 'Password is required']
    },
    refreshToken : {
        type : String
    }
}, {timestamps:true})

userSchema.mongooseAggregatePaginate(plugin)

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next()
    }
    this.password = bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
          _id: this._id,
          email: this.email,
          username: this.username,
          role: this.role,
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
      );
}
userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
          _id: this._id
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
      );
}
export const User = mongoose.model("User", userSchema)