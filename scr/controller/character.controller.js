import character from "../models/character.js";
export const createCharacter = async (req, res) =>{
    const {name, ki, race, gender, description } = req.body;

    try{
        const product = await Product.create({name, ki, race, gender, description });
        res.status(201).json(character);
    } catch (err) {
        res.status(500).json({error: err.message});

    }

};

export const getALLProduct = async (req, res) => {
    try{
        const characters = await Character.findALL();
        res.json({
            count: character.legth,
            data: character
        });

    } catch (err) {
        res.status(500).json({error: err.message });
    }

  const character = await Character.create(req.body);

  res.status(201).json(product);
};
/*
export const updateProducts = async (req, res) => {
    try{
        const products = await Product.updateALL();
        res.json({
            count: product.legth,
            data: product
        });

    } catch (err) {
        res.status(500).json({error: err.message });
    }
};
export const deleteProduct = async (req, res) => {
    try{
        const deleted = await Product.delete();
        res.json({
            count: product.legth,
            data: product
        });

    } catch (err) {
        res.status(500).json({error: err.message });
    }
};*/