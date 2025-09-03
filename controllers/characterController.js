import charactersModel from "../models/charactersModel.js";

class characterController {
    constructor() {

    }

    async getAllCharacters(req, res){
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const skip = (page - 1) * limit;

            const charactersQuery = charactersModel.getAll().select("-createdAt -updatedAt")
            const characters = await charactersQuery.skip(skip).limit(limit)
            const total = await charactersModel.getAll().countDocuments()

            res.status(200).json({page,limit,total, totalPages: Math.ceil(total / limit), data: characters})
        } catch (e) {
            res.status(500).send(e)
        }
    }

    async getCharacterById(req, res){
        try {
            const { id } = req.params
            const data = await charactersModel.getById(id).select("-createdAt -updatedAt")
            res.status(200).json(data)
        } catch (e) {
            res.status(500).send(e)
        }
    }

async getCharacterByName(req, res){
    try {
        const { name } = req.query;
        if (!name) return res.status(400).json({ error: "Se requiere el nombre" });

        const data = await charactersModel.getByName(name)
            .select("-createdAt -updatedAt");

        res.status(200).json(data);
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: e.message });
    }
}


    async createCharacter(req, res){
        try {
            const data = await charactersModel.create(req.body)
            res.status(201).json(data)
        } catch (e) {
            res.status(500).send(e)
        }
    }

    async updateCharacter(req, res){
        try {
            const { id } = req.params
            const data = await charactersModel.update(id, req.body)
            res.status(201).json(data)
        } catch (e) {
            res.status(500).send(e)
        }
    }

    async deleteCharacter(req, res){
        try {
            const { id } = req.params
            const data = await charactersModel.delete(id)
            res.status(206).json(data)
        } catch (e) {
            res.status(500).send(e)
        }
    }
}

export default new characterController()