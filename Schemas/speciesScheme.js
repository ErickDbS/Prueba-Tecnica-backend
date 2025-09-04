import mongoose from "mongoose";

const speciesScheme = new mongoose.Schema(
    {
        name: {type: String, required: true},
        classification: String,
        designation: String,
        average_height: Number,
        average_lifespan: Number,
        eye_colors: String,
        hair_colors: String,
        skin_colors: String,
        language: String,
        characters: [{type: mongoose.Schema.Types.ObjectId, ref: 'characters'}],
        films: [{type: mongoose.Schema.Types.ObjectId, ref: 'films'}]
    }, { timestamps: true }
)

export default mongoose.model('species', speciesScheme)