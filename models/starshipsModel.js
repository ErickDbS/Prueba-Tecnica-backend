import mongoose from "mongoose";
import Starships from '../Schemas/starshipsScheme.js'

class starshipModel {
    
    async create(starship){
        return await Starships.create(starship)
    }

    update(id, starship){
        return Starships.findByIdAndUpdate({ _id: new mongoose.Types.ObjectId(id)}, starship, {new: true})
    }

    async delete(id){
        return await Starships.findByIdAndDelete({ _id: new mongoose.Types.ObjectId(id)})
    }

    getAll(){
        return Starships.find()
    }

    async getNameAndId(){
        return await Starships.find().select("_id name")
    }

    getById(id){
        return  Starships.findById({ _id: new mongoose.Types.ObjectId(id)})
    }
}

export default new starshipModel()