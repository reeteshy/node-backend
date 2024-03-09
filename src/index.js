
import connectDB from "./db/index.js";

connectDB()
/*
require('dotenv').config({path:'/.env'})
const mongoose = require("mongoose");
import { DB_NAME } from "./constants";
import { express } from "express";

const port = process.env.PORT || 4000;

const app = express()

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on((error)=>{
        console.log("Error of DB connection ", error)
        throw error
    })
    app.listion(port, ()=> { 
        console.log("App is listioning on port ", port)
    })
    const Cat = mongoose.model("Cat", { name: String });

    const kitty = new Cat({ name: "Zildjian" });
    kitty.save().then(() => console.log("meow"));
  } catch (error) {
    console.log("Connection has eror ", error);
    throw error;
  }
})();
*/