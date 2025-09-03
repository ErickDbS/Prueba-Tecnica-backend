import mongoose from "mongoose";

const vehiclesScheme = new mongoose.Schema(
    {
        name: {type: String, required: true},
        model: {type: String, required: true},
        vehicle_class: String,
        vehicle_height: Number,
        number_passengers: Number,
        max_atmosphering_speed: Number,
        cargo_capacibility: Number,
        consumibles: String

    }, { timestamps: true }
)

export default mongoose.model('vehicles', vehiclesScheme)