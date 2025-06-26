import { Router } from 'express';
import { createCharacter, getALLCharacter } from '../controller/character.controller.js';

const router = Router();

router.post('/', [], createCharacter)
router.get('/', getALLCharacter)

export default router;
