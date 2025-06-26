import { Router } from 'express';
const routerDBZ = Router();
import { createCharacter, getALLCharacter, getCharacterById, deleteCharacter, updateCharacter  } from '../controller/character.controller.js';



routerDBZ.post("/characters", createCharacter)
routerDBZ.get("/characters", getALLCharacter)
routerDBZ.get("/characters/:id", getCharacterById)
routerDBZ.delete("/characters/:id", deleteCharacter)
routerDBZ.post("/characters/:id", updateCharacter)

export default routerDBZ
