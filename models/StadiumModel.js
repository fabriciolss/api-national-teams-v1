import mongoose from "mongoose";

export function stadiumModel() {
    const stadiumSchema = new mongoose.Schema({
            id: {type: String},
            name: {type: String, required: true},
            address: {type: String, required: true},
            capacity: {type: Number, required: true}
        },
        {
            versionKey: false
        })

    return mongoose.model('stadiums', stadiumSchema);
}