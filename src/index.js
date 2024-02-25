// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectBD from "./db/index.js";

dotenv.config({
    path: './env'
})

connectBD()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("\nMONGO db connection failed !!! \n", error);
})



/*
import express from "express"
const app = express()
;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)                                ASSIGNMENT
        app.on("error", (error) => {                                                                     TODO
            console.log("Error :: Express", error);                                                   ADD app.on 
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.log("ERROR :: in MongoDB connect ::",error);
    }
})()
*/