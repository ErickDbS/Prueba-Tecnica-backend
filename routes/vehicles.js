import express from 'express'
import vehiclesController from '../controllers/vehiclesController.js'


const route = express.Router()

route.get('/name', vehiclesController.getVehiclesByNameAndId)
route.get('/:id', vehiclesController.getVehiclesById)
route.get('/', vehiclesController.getAllVehicles)
route.post('/', vehiclesController.createVehicles)
route.put('/:id', vehiclesController.updateVehicles)
route.delete('/:id', vehiclesController.deleteVehicles)

export default route;