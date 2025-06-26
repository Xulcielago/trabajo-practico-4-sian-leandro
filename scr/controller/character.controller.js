
import character from "../models/character.js";
 

//Crear personajes
export const createCharacter = async (req, res) =>{
    try{
        let {name, ki, race, gender} = req.body;
        
        //Validaciones:
        let validarNombre = await character.findOne({where:{name}})
        if (validarNombre) {
            return res.status(400).json( { message: "Error: Personaje ya en la base de datos" } )
        } 
        if (name.trim() === '') {
            return res.status(400).json( { message: "Error: Nombre del personaje no debe ser vacío"  } ) 
        }
       
        if (typeof ki !== 'number') {
            return res.status(400).json( { message: "Error: El ki debe ser un número entero"  } ) 
        }

        if (race.trim() === '') {
            return res.status(400).json( { message: "Error: Raza del personaje no debe ser vacío"  } ) 
        }
        
        if ((gender !== "male") && (gender !== "female")) {
            return res.status(400).json( { message: "Campo gender solo acepta los valores male y female" } )
        }

        const char = await character.create(req.body)
        res.status(201).json("Creado correctamente")
    } catch (err) {
        res.status(500).json({message: 'Error del lado interno del servidor: ', error: err.message})

    }
}

//Ver todos los personajes
export const getALLCharacter = async (req, res) => {
    try{
        const AllCharacters = await character.findAll()
        res.json(AllCharacters)

    } catch (err) {
        res.status(500).json({message: 'Error del lado interno del servidor: ', error: err.message})
    }

  const AllCharacters = await character.create(req.body);

  res.status(201).json(character);
};

//Ver personaje por ID
export const getCharacterById = async (req, res) => {
  let id = parseInt(req.params.id)
  if (isNaN(id)) {
    return res.status(400).json( { message: "El ID identificatoria debe ser un número" } )
  }
  try {
    const findIDcharacter = await character.findByPk(id);
    if (findIDcharacter) {
      res.json(character);
    } else {
      res.status(404).json({ error: 'Personaje no encontrado' });
    }
  } catch (err) {
    res.status(500).json({message: 'Error del lado interno del servidor: ', error: err.message})
  }
};

//Actualizar personaje por ID
export const updateCharacter = async (req, res) => {
  try {
    const searchCharacter = await character.findByPk(id);
    if (searchCharacter) {
      await character.update(req.body);
      res.json(character);
    } else {
      res.status(404).json({ error: 'Personaje no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//Borrar personajes
export const deleteCharacter = async (req, res) => {
  try {
    const character = await character.findByPk(id);
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


