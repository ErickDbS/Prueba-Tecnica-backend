import express from 'express'
import filmsController from '../controllers/filmsController.js'


const route = express.Router()

route.get('/name', filmsController.getFilmByNameAndId)
route.get('/:id', filmsController.getFilmsById)
route.get('/', filmsController.getAllFilms)
route.post('/', filmsController.createFilm)
route.put('/:id', filmsController.updateFilm)
route.delete('/:id', filmsController.deleteFilm)

export default route;