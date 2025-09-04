import e from 'express';
import filmsModel from '../models/filmsModel.js'

class filmsController{
    constructor(){

    }

    async getAllFilms(req, res){
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const skip = (page - 1) * limit;
            
            const filmsQuery = filmsModel.getAll().select("-createdAt -updatedAt")
            const films = await filmsQuery.skip(skip).limit(limit)
            const total = await filmsModel.getAll().countDocuments()
            
            res.status(200).json({page,limit,total, totalPages: Math.ceil(total / limit), data: films})
        } catch (e) {
            res.status(500).send(e)
        }
    }

    async getFilmsById(req, res){
        try {
            const { id } = req.params
            const data = await filmsModel.getById(id).select("-createdAt -updatedAt")
            res.status(200).json(data)
        } catch (e) {
            res.status(500).send(e)
        }
    }

    async getFilmByNameAndId(req, res){
        try {
            const data = await filmsModel.getNameAndId()
            res.status(200).json(data)
        } catch (error) {
            res.status(500).send(e)
        }
    }

    async createFilm(req, res){
        try {
            const data = await filmsModel.create(req.body)
            res.status(201).json(data)
        } catch (e) {
            res.status(500).send(e)
        }
    }

    async updateFilm(req, res){
        try {
            const { id } = req.params
            const data = await filmsModel.update(id, req.body)
            res.status(201).json(data)
        } catch (e) {
            res.status(500).send(e)
        }
    }

    async deleteFilm(req, res){
        try {
            const { id } = req.params
            await filmsModel.delete(id)
            res.status(206).json("Registro borrado exitosamente")
        } catch (e) {
            res.status(500).send(e)
        }
    }
}

export default new filmsController()