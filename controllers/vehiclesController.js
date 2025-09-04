import vehiclesModel from '../models/vehiclesModel.js'

class vehiclesController{
    constructor(){

    }

    async getAllVehicles(req, res){
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const skip = (page - 1) * limit;
            
            const vehiclepQuery = vehiclesModel.getAll().select("-createdAt -updatedAt")
            const vehicle = await vehiclepQuery.skip(skip).limit(limit)
            const total = await vehiclesModel.getAll().countDocuments()
            
            res.status(200).json({page,limit,total, totalPages: Math.ceil(total / limit), data: vehicle})
        } catch (e) {
            res.status(500).send(e)
        }
    }

    async getVehiclesById(req, res){
        try {
            const { id } = req.params
            const data = await vehiclesModel.getById(id).select("-createdAt -updatedAt")
            res.status(200).json(data)
        } catch (e) {
            res.status(500).send(e)
        }
    }

    async getVehiclesByNameAndId(req, res){
        try {
            const data = await vehiclesModel.getNameAndId()
            res.status(200).json(data)
        } catch (error) {
            res.status(500).send(e)
        }
    }

    async createVehicles(req, res){
        try {
            const data = await vehiclesModel.create(req.body)
            res.status(201).json(data)
        } catch (e) {
            res.status(500).send(e)
        }
    }

    async updateVehicles(req, res){
        try {
            const { id } = req.params
            const data = await vehiclesModel.update(id, req.body).select("-createdAt -updatedAt")
            res.status(201).json(data)
        } catch (e) {
            res.status(500).send(e)
        }
    }

    async deleteVehicles(req, res){
        try {
            const { id } = req.params
            await vehiclesModel.delete(id)
            res.status(206).json("Registro borrado exitosamente")
        } catch (e) {
            res.status(500).send(e)
        }
    }
}

export default new vehiclesController()