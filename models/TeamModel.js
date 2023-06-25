import mongoose from "mongoose";

export function teamModel() {
    const teamSchema = new mongoose.Schema({
            id: {type: String},
            club: {type: String, required: true},
            yearFoundation: {type: Number, required: true},
            stadium: {type: mongoose.Schema.Types.ObjectId, ref: 'stadiums', required: true},
            lineup: {type: Array},
        },
        {
            versionKey: false
        }
    )

    return mongoose.model('teams', teamSchema);
}