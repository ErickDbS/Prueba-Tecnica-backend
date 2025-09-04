import mongoose from "mongoose";

const planetsSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        diameter: Number,
        rotation_period: Number,
        orbital_period: Number,
        gravity: String,
        population: Number,
        climate: String,
        terrain: String,
        surface_water: Number,
        residents: [{type: mongoose.Schema.Types.ObjectId, ref: "characters"}],
        films: [{type: mongoose.Schema.Types.ObjectId, ref: 'films'}]
    }, { timestamps: true }
)

export default mongoose.model('planets', planetsSchema)