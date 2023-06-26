import mongoose from "mongoose";

export function stadiumModel() {
    const stadiumSchema = new mongoose.Schema({
            id: {type: String},
            name: {type: String, required: [true, 'Name is required']},
            address: {type: String, required: [true, 'Address is required']},
            capacity: {type: Number, required: [true, 'Capacity is required']}
        },
        {
            versionKey: false
        })

    return mongoose.model('stadiums', stadiumSchema);
}