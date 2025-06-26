import { Router } from 'express';
const routerDBZ = Router();
import { createCharacter, getALLCharacter, deleteCharacter  } from '../controller/character.controller.js';



routerDBZ.post("/character", createCharacter)
routerDBZ.get("/character", getALLCharacter)
routerDBZ.delete("/character", deleteCharacter)

export default routerDBZ
