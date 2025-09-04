import mongoose from "mongoose";

const starshipsScheme = new mongoose.Schema(
    {
        name: {type: String, required: true},
        model: {type: String, required: true},
        starship_class: String,
        length: Number,
        passengers: Number,
        max_atmosphering_speed: Number,
        hyperdrive_rating: Number,
        MGLT: Number,
        cargo_capacity: Number,
        consumibles: String,
        films: [{type: mongoose.Schema.Types.ObjectId, ref: 'films'}]
    }, { timestamps: true }
)

export default mongoose.model('starships', starshipsScheme)