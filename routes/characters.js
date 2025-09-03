import express from 'express';
import characterController from '../controllers/characterController.js';

const route = express.Router()

route.post('/', characterController.createCharacter)
route.get('/search', characterController.getCharacterByName)
route.get('/:id', characterController.getCharacterById)
route.get('/', characterController.getAllCharacters)
route.put('/:id', characterController.updateCharacter)
route.delete('/:id', characterController.deleteCharacter)

export default route;