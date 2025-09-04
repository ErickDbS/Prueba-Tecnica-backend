import speciesModel from '../models/speciesModel.js'

class specieController{
    constructor(){

    }

    async getAllSpecies(req, res){
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const skip = (page - 1) * limit;
            
            const specieQuery = speciesModel.getAll().select("-createdAt -updatedAt")
            const specie = await specieQuery.skip(skip).limit(limit)
            const total = await speciesModel.getAll().countDocuments()
            
            res.status(200).json({page,limit,total, totalPages: Math.ceil(total / limit), data: specie})
        } catch (e) {
            res.status(500).send(e)
        }
    }

    async getSpeciesById(req, res){
        try {
            const { id } = req.params
            const data = await speciesModel.getById(id).select("-createdAt -updatedAt")
            res.status(200).json(data)
        } catch (e) {
            res.status(500).send(e)
        }
    }

    async getSpeciesByNameAndId(req, res){
        try {
            const data = await speciesModel.getNameAndId()
            res.status(200).json(data)
        } catch (error) {
            res.status(500).send(e)
        }
    }

    async createSpecies(req, res){
        try {
            const data = await speciesModel.create(req.body)
            res.status(201).json(data)
        } catch (e) {
            res.status(500).send(e)
        }
    }

    async updateSpecies(req, res){
        try {
            const { id } = req.params
            const data = await speciesModel.update(id, req.body).select("-createdAt -updatedAt")
            res.status(201).json(data)
        } catch (e) {
            res.status(500).send(e)
        }
    }

    async deleteSpecies(req, res){
        try {
            const { id } = req.params
            await speciesModel.delete(id)
            res.status(206).json("Registro borrado exitosamente")
        } catch (e) {
            res.status(500).send(e)
        }
    }
}

export default new specieController()