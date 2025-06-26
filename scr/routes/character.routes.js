import { Router } from 'express';
const routerDBZ = Router();
import { createCharacter, getALLCharacter, deleteCharacter  } from '../controller/character.controller.js';



routerDBZ.post("/characters", createCharacter)
routerDBZ.get("/characters", getALLCharacter)
routerDBZ.delete("/characters", deleteCharacter)

export default routerDBZ
