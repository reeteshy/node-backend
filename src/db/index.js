import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from 'dotenv'

dotenv.config({
    path:'./env'
})

const port = process.env.PORT || 4000;

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("Mongo DB connection with host ", connectionInstance.connection.host)
    } catch (error) {
        console.log("Having errorin db connection ", error)
        process.exit(1)
    }
}

export default connectDB;