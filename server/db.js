import mongoose from "mongoose";
import 'dotenv/config'

export async function connectMongo(){
    mongoose.connect(process.env.URI_STRING)
    .then(suc => console.log(`Successfully connected.`))
    .catch(err => console.error(`Failure connection. ${err.message}`))
}