import mongoose from "mongoose";

const characterScheme = new mongoose.Schema(
    {
       name: {type: String, required: true},
       birth_year: String,
       eyes_color: String,
       gender: String,
       hair_color: String,
       skin_color: String,
       height: Number,
       mass: Number 
    }, { timestamps: true }
)

export default mongoose.model('characters', characterScheme)