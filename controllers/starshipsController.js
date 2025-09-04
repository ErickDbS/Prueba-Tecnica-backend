import starhipModel from '../models/starshipsModel.js'

class starshipController{
    constructor(){

    }

    async getAllStarships(req, res){
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const skip = (page - 1) * limit;
            
            const starshipQuery = starhipModel.getAll().select("-createdAt -updatedAt")
            const starship = await starshipQuery.skip(skip).limit(limit)
            const total = await starhipModel.getAll().countDocuments()
            
            res.status(200).json({page,limit,total, totalPages: Math.ceil(total / limit), data: starship})
        } catch (e) {
            res.status(500).send(e)
        }
    }

    async getStarshipsById(req, res){
        try {
            const { id } = req.params
            const data = await starhipModel.getById(id).select("-createdAt -updatedAt")
            res.status(200).json(data)
        } catch (e) {
            res.status(500).send(e)
        }
    }

    async getStarshipsByNameAndId(req, res){
        try {
            const data = await starhipModel.getNameAndId()
            res.status(200).json(data)
        } catch (error) {
            res.status(500).send(e)
        }
    }

    async createStarships(req, res){
        try {
            const data = await starhipModel.create(req.body)
            res.status(201).json(data)
        } catch (e) {
            res.status(500).send(e)
        }
    }

    async updateStarships(req, res){
        try {
            const { id } = req.params
            const data = await starhipModel.update(id, req.body).select("-createdAt -updatedAt")
            res.status(201).json(data)
        } catch (e) {
            res.status(500).send(e)
        }
    }

    async deleteStarships(req, res){
        try {
            const { id } = req.params
            await starhipModel.delete(id)
            res.status(206).json("Registro borrado exitosamente")
        } catch (e) {
            res.status(500).send(e)
        }
    }
}

export default new starshipController()