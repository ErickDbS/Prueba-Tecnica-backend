import express from 'express'
import starshipsController from '../controllers/starshipsController.js'


const route = express.Router()

route.get('/name', starshipsController.getStarshipsByNameAndId)
route.get('/:id', starshipsController.getStarshipsById)
route.get('/', starshipsController.getAllStarships)
route.post('/', starshipsController.createStarships)
route.put('/:id', starshipsController.updateStarships)
route.delete('/:id', starshipsController.deleteStarships)

export default route;