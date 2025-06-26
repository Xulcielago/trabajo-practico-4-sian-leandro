
import character from "../models/character.js";
  
export const createCharacter = async (req, res) =>{
    const {name} = req.body;
    try{
        const validarNombre = await character.findOne({ name })
        if (validarNombre) {
            return res.status(400).json(
                {
                    message: "Error: Personaje ya en la base de datos"
                }
            )
        } 

        const char = await character.create(req.body)
        res.status(201).json(char)
    } catch (err) {
        res.status(500).json({error: err.message})

    }
}
//Crear personajes

export const getALLCharacter = async (req, res) => {
    try{
        const AllCharacters = await character.findAll();
        res.json({
            count: character.legth,
            data: character
        });

    } catch (err) {
        res.status(500).json({error: err.message });
    }

  const AllCharacters = await character.create(req.body);

  res.status(201).json(character);
};
//Ver todos los personajes

export const getCharacterById = async (req, res) => {
  try {
    const character = await Character.findByPk(req.params.id);
    if (character) {
      res.json(character);
    } else {
      res.status(404).json({ error: 'Personaje no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
//Ver personaje por ID

export const updateCharacter = async (req, res) => {
  try {
    const character = await Character.findByPk(req.params.id);
    if (character) {
      await character.update(req.body);
      res.json(character);
    } else {
      res.status(404).json({ error: 'Personaje no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
//Actualizar personaje por ID

export const deleteCharacter = async (req, res) => {
  try {
    const character = await character.findByPk(req.params.id);
    if (character) {
      await character.destroy()
      res.json({ message: 'Personaje eliminado correctamente' })
    } else {
      res.status(404).json({ error: 'Personaje no encontrado' })
    }
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
//Borrar personajes

