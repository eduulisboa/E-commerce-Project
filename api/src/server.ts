// connect database
import mongoose from "mongoose"
import dotenv from "dotenv"

import app from "./app"

dotenv.config()

const port = 8000

mongoose.connect(process.env.MONGODB_URI as string)
.then(() => {
    app.listen(port, () => {
        console.log('HTTP server running!')
    })
})
.catch((error:Error) => {
    console.log("MongoDB connection error.")
    process.exit(1)
})
