import mongoose from "mongoose";

const characterScheme = new mongoose.Schema(
    {
       name: {type: String, required: true},
       birth_year: String,
       eye_color: String,
       gender: String,
       hair_color: String,
       skin_color: String,
       height: Number,
       mass: Number,
       homeworld: {type: mongoose.Schema.Types.ObjectId, ref: 'planets'}, 
       films: [{type: mongoose.Schema.Types.ObjectId, ref: 'films'}],
       species: [{type: mongoose.Schema.Types.ObjectId, ref: 'species'}],
       starships: [{type: mongoose.Schema.Types.ObjectId, ref: 'starships'}],
       vehicles: [{type: mongoose.Schema.Types.ObjectId, ref: 'vehicles'}]
    }, { timestamps: true }
)

export default mongoose.model('characters', characterScheme)