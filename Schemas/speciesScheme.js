import mongoose from "mongoose";

const speciesScheme = new mongoose.Schema(
    {
        name: {type: String, required: true},
        clasification: String,
        designation: String,
        height: Number,
        average_lifespan: Number,
        eyes_color: String,
        hair_color: String,
        skin_color: String,
        language: String
    }, { timestamps: true }
)

export default mongoose.model('species', speciesScheme)