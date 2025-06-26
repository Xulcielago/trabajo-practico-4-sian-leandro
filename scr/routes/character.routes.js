import { Router } from 'express';
const routerDBZ = Router();
import { createCharacter } from '../controller/character.controller.js';



routerDBZ.post("/character", createCharacter)
//routerDBZ.get('/', getALLCharacter)

export default routerDBZ
