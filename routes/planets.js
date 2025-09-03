import express from 'express'
import planetsController from '../controllers/planetsController.js'

const route = express.Router()

route.post('/', planetsController.createPlanets)
route.get('/:id', planetsController.getById)
route.delete('/:id', planetsController.deletePlanet)

export default route;