import express from 'express'
import specieController from '../controllers/speciesController.js'


const route = express.Router()

route.get('/name', specieController.getSpeciesByNameAndId)
route.get('/:id', specieController.getSpeciesById)
route.get('/', specieController.getAllSpecies)
route.post('/', specieController.createSpecies)
route.put('/:id', specieController.updateSpecies)
route.delete('/:id', specieController.deleteSpecies)

export default route;