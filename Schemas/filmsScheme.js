import mongoose from "mongoose";

const filmsScheme = new mongoose.Schema(
    {
        title: {type: String, required: true},
        director: {type: String, required: true},
        producer: {type: String, required: true},
        characters: [{type: mongoose.Schema.Types.ObjectId, ref: 'characters'}],
        planets: [{type: mongoose.Schema.Types.ObjectId, ref: 'planets'}],
        starships: [{type: mongoose.Schema.Types.ObjectId, ref: 'starships'}],
        vehicles: [{type: mongoose.Schema.Types.ObjectId, ref: 'vehicles'}],
        species: [{type: mongoose.Schema.Types.ObjectId, ref: 'species'}]



    }, { timestamps: true }
)

export default mongoose.model('films', filmsScheme)