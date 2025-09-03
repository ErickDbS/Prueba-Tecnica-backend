import mongoose from "mongoose";

const filmsScheme = new mongoose.Schema(
    {
        title: {type: String, required: true},
        director: {type: String, required: true},
        productor: {type: String, required: true}
    }, { timestamps: true }
)

export default mongoose.model('films', filmsScheme)