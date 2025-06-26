
import character from "../models/character.js";


//Crear personajes
export const createCharacter = async (req, res) => {
    try {
        let { name, ki, race, gender } = req.body;

        //Validaciones:
        let validarNombre = await character.findOne({ where: { name } })
        if (validarNombre) {
            return res.status(400).json({ message: "Error: Personaje ya en la base de datos" })
        }
        if (name.trim() === '') {
            return res.status(400).json({ message: "Error: Nombre del personaje no debe ser vacío" })
        }

        if (typeof ki !== 'number') {
            return res.status(400).json({ message: "Error: El ki debe ser un número entero" })
        }

        if (race.trim() === '') {
            return res.status(400).json({ message: "Error: Raza del personaje no debe ser vacío" })
        }

        if ((gender !== "male") && (gender !== "female")) {
            return res.status(400).json({ message: "Campo gender solo acepta los valores male y female" })
        }

        const char = await character.create(req.body)
        res.status(201).json("Creado correctamente")
    } catch (err) {
        res.status(500).json({ message: 'Error del lado interno del servidor: ', error: err.message })

    }
}

//Ver todos los personajes
export const getALLCharacter = async (req, res) => {
    try {
        const AllCharacters = await character.findAll()
        res.json(AllCharacters)

    } catch (err) {
        res.status(500).json({ message: 'Error del lado interno del servidor: ', error: err.message })
    }

    const AllCharacters = await character.create(req.body);

    res.status(201).json(character);
};

//Ver personaje por ID
export const getCharacterById = async (req, res) => {
    const { id } = req.params;

    //Validación de correcta sintaxis de ID
    if (isNaN(id)) {
        return res.status(400).json({ message: "El ID identificatoria debe ser un número" })
    }

    try {
        const findIDcharacter = await character.findByPk(id);
        if (findIDcharacter) {
            res.status(200).json(findIDcharacter);
        } else {
            res.status(404).json({ error: 'Personaje no encontrado' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error del lado interno del servidor: ', error: err.message })
    }
};

//Actualizar personaje por ID
export const updateCharacter = async (req, res) => {
    const { id } = req.params;
    let { name, ki, race, gender } = req.body;

    let validarNombre = await character.findOne({ where: {name } })
    if (validarNombre) {
        return res.status(400).json({ message: "Error: Personaje ya en la base de datos" })
    }

    if (isNaN(id)) {
        return res.status(400).json({ message: "El ID identificatoria debe ser un número" })
    }

    if (name.trim() === '') {
        return res.status(400).json({ message: "Error: Nombre del personaje no debe ser vacío" })
    }

    if (typeof ki !== 'number') {
        return res.status(400).json({ message: "Error: El ki debe ser un número entero" })
    }

    if (race.trim() === '') {
        return res.status(400).json({ message: "Error: Raza del personaje no debe ser vacío" })
    }

    if ((gender !== "male") && (gender !== "female")) {
        return res.status(400).json({ message: "Campo gender solo acepta los valores male y female" })
    }

    try {
        const searchCharacter = await character.findByPk(id);
        if (searchCharacter) {
            await searchCharacter.update({name, ki, race, gender});
            res.json(searchCharacter);
        } else {
            res.status(404).json({ error: 'Personaje no encontrado' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

//Borrar personajes
export const deleteCharacter = async (req, res) => {
    const { id } = req.params;
    if (isNaN(id)) {
        return res.status(400).json({ message: "El ID identificatoria debe ser un número" })
    }
    try {
        const findIDcharacter = await character.findByPk(id);
        if (findIDcharacter) {
            await findIDcharacter.destroy()
            res.json({ message: 'Personaje eliminado correctamente' })
        } else {
            res.status(404).json({ error: 'Personaje no encontrado' })
        }
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}


