import mongoose from "mongoose";
import Vehicles from '../Schemas/vehiclesScheme.js'

class vehiclesModel {
    
    async create(vehicle){
        return await Vehicles.create(vehicle)
    }

    update(id, vehicle){
        return Vehicles.findByIdAndUpdate({ _id: new mongoose.Types.ObjectId(id)}, vehicle, {new: true})
    }

    async delete(id){
        return await Vehicles.findByIdAndDelete({ _id: new mongoose.Types.ObjectId(id)})
    }

    getAll(){
        return Vehicles.find()
    }

    async getNameAndId(){
        return await Vehicles.find().select("_id name")
    }

    getById(id){
        return  Vehicles.findById({ _id: new mongoose.Types.ObjectId(id)})
    }
}

export default new vehiclesModel()