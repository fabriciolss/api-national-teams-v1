import mongoose from "mongoose";

export async function connectMongo(){
    mongoose.connect('mongodb+srv://fabricio:123@studycluster.u4tk2wy.mongodb.net/teams')
    .then(suc => console.log(`Successfully connected.`))
    .catch(err => console.error(`Failure connection. ${err.message}`))
}