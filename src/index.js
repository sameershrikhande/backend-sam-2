// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectBD from "./db/index.js";
import {app} from "./app.js"

dotenv.config({
    path: './env'
})

connectBD() 
.then(() => {
    app.on("error", (error) => {
        console.log("Error :: Express", error);
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : http://localhost:${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("\nMONGO db connection failed !!! \n", error);
})



/*
// using IFFI method () ()
;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)                                ASSIGNMENT
        app.on("error", (error) => {                                                                     TODO
            console.log("Error :: Express", error);                                                   ADD app.on 
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server is running at port : http://localhost:${process.env.PORT}`);
        })

    } catch (error) {
        console.log("ERROR :: in MongoDB connect ::",error);
    }
})()
*/