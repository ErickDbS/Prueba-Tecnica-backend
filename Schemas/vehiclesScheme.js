import mongoose from "mongoose";

const vehiclesScheme = new mongoose.Schema(
    {
        name: {type: String, required: true},
        model: {type: String, required: true},
        vehicle_class: String,
        length: Number,
        passengers: Number,
        max_atmosphering_speed: Number,
        cargo_capacity: Number,
        consumables: String,
        films: [{type: mongoose.Schema.Types.ObjectId, ref: 'films'}]

    }, { timestamps: true }
)

export default mongoose.model('vehicles', vehiclesScheme)