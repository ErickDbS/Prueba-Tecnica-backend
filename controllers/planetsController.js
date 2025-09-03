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
            const data = await planetsModel.delete(id)
            res.status(206).json(data)
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

}

export default new planetController()