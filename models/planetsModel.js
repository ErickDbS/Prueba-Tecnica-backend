import mongoose from "mongoose";
import Planet from "../Schemas/planetsSchema.js";

class planetModel {
    async create(planet){
        return await Planet.create(planet)
    }

    getAll(){
        return Planet.find()
    }

    getById(id){
        return Planet.findById({ _id: new mongoose.Types.ObjectId(id)})
    }

    async update(id, planet) {
        return await Planet.findByIdAndUpdate({ _id: new mongoose.Types.ObjectId(id)}, planet)
    }

    async delete(id) {
        return await Planet.findByIdAndDelete({ _id: new mongoose.Types.ObjectId(id)})
    }
}

export default new planetModel();