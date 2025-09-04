import mongoose from "mongoose";
import Character from "../Schemas/characterScheme.js";

class characterModel {
    async create(character){
        return await Character.create(character)
    }

    getAll(){
        return Character.find()
    }

    getById(id){
        return Character.findById({ _id: new mongoose.Types.ObjectId(id)})
    }

    getByName(name){
        return Character.find({ name: { $regex: `.*${name}.*`, $options: 'i' } })
    }

    async update(id, character) {
        return await Character.findByIdAndUpdate({ _id: new mongoose.Types.ObjectId(id)}, character, {new: true})
    }

    async delete(id) {
        return await Character.findByIdAndDelete({ _id: new mongoose.Types.ObjectId(id)})
    }
}

export default new characterModel();