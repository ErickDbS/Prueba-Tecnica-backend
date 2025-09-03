import mongoose from "mongoose";

const planetsSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        diameter: Number,
        rotation_period: Number,
        orbital_period: Number,
        gravity: Number,
        population: Number,
        climate: String,
        terrain: String,
        surface_water: Number
    }, { timestamps: true }
)

export default mongoose.model('planets', planetsSchema)