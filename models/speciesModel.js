import mongoose from "mongoose";
import Species from '../Schemas/speciesScheme.js'

class speciesModel {
    
    async create(specie){
        return await Species.create(specie)
    }

    update(id, specie){
        return Species.findByIdAndUpdate({ _id: new mongoose.Types.ObjectId(id)}, specie, {new: true})
    }

    async delete(id){
        return await Species.findByIdAndDelete({ _id: new mongoose.Types.ObjectId(id)})
    }

    getAll(){
        return Species.find()
    }

    async getNameAndId(){
        return await Species.find().select("_id name")
    }

    getById(id){
        return  Species.findById({ _id: new mongoose.Types.ObjectId(id)})
    }
}

export default new speciesModel()