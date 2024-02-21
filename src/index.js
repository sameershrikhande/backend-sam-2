// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectBD from "./db/index.js";

dotenv.config({
    path: './env'
})

connectBD()



/*
import express from "express"
const app = express()
;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("Error", (error) => {
            console.log("Error :: Express", error);
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.log("ERROR :: in MongoDB connect ::",error);
    }
})()
*/