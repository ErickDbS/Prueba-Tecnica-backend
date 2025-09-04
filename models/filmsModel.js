import mongoose from "mongoose";
import Film from '../Schemas/filmsScheme.js'

class filmsModel {
    
    async create(film){
        return await Film.create(film)
    }

    async update(id, film){
        return await Film.findByIdAndUpdate({ _id: new mongoose.Types.ObjectId(id)}, film, {new: true})
    }

    async delete(id){
        return await Film.findByIdAndDelete({ _id: new mongoose.Types.ObjectId(id)})
    }

    getAll(){
        return Film.find()
    }

    async getNameAndId(){
        return await Film.find().select("_id title")
    }

    getById(id){
        return  Film.findById({ _id: new mongoose.Types.ObjectId(id)})
    }
}

export default new filmsModel()