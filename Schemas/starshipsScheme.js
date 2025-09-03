import mongoose from "mongoose";

const starshipsScheme = new mongoose.Schema(
    {
        name: {type: String, required: true},
        model: {type: String, reequired: true},
        starship_class: String,
        startship_height: Number,
        numberP_passengers: Number,
        max_atmosphering_speed: Number,
        hyperdrive_rating: Number,
        MGLT: Number,
        cargo_capacibility: Number,
        consumibles: String
    }, { timestamps: true }
)

export default mongoose.model('starships', starshipsScheme)