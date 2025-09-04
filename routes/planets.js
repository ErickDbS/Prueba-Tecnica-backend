import express from 'express'
import planetsController from '../controllers/planetsController.js'

const route = express.Router()

route.post('/', planetsController.createPlanets)
route.get('/name', planetsController.getIdAndName)
route.get('/:id', planetsController.getById)
route.get('/', planetsController.getAllPlanets)
route.delete('/:id', planetsController.deletePlanet)
route.put('/:id', planetsController.updatePlanet)

export default route;