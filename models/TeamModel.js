import mongoose from "mongoose";

export function teamModel() {
    const teamSchema = new mongoose.Schema({
            id: {type: String},
            club: {type: String, required: [true, 'Club is required']},
            yearFoundation: {type: Number, required: [true, 'Year Foundation is required']},
            stadium: {type: mongoose.Schema.Types.ObjectId, ref: 'stadiums', required: [true, 'Stadium is required']},
            lineup: {type: Array},
        },
        {
            versionKey: false
        }
    )

    return mongoose.model('teams', teamSchema);
}