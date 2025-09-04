import planetsModel from "../models/planetsModel.js";

class planetController {
    constructor(){

    }
    
    async createPlanets(req, res){
        try {
            const data = await planetsModel.create(req.body)
            res.status(201).json(data)
        } catch (e) {
            res.status(500).send(e)
        }
    }

    async updatePlanet(req, res){
        try {
            const { id } = req.params
            const data = await planetsModel.update(id, req.body)
            res.status(201).json(data)
        } catch (e) {
            res.status(500).send(e)
        }
    }

    async deletePlanet(req, res){
        try {
            const { id } = req.params
            await planetsModel.delete(id)
            res.status(206).json("Registro borrado exitosamente")
        } catch (e) {
            res.status(500).send(e)
        }
    }

    async getById(req, res){
        try {
            const { id } = req.params
            const data = await planetsModel.getById(id).select("-createdAt -updatedAt")
            res.status(200).json(data)
        } catch (e) {
            res.status(500).send(e)
        }
    }

    async getAllPlanets(req, res){
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const skip = (page - 1) * limit;

             const planetsQuery = planetsModel.getAll().select("-createdAt -updatedAt")
             const planets = await planetsQuery.skip(skip).limit(limit)
             const total = await planetsModel.getAll().countDocuments()

             res.status(200).json({page, limit, total, totalPages: Math.ceil(total / limit), data: planets })
        } catch (e) {
            res.status(500).send(e)
        }
    }

    async getIdAndName(req, res){
        try {
            const data = await planetsModel.getIdAndName()
            res.status(200).json(data)
        } catch (e) {
            res.status(500).send(e)
        }
    }

}

export default new planetController()