const express = require('express');

const dbConnect = require('../data/helpers/recipe-model.js');
const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const recipes = await dbConnect.getRecipes();
        res.status(201).json(recipes);

    }catch(error) {
        res.status(501).json({
            message: error.toString()
        })
    }
})


router.get('/:id', async (req, res) => {
    try{
        const recipe = await dbConnect.getRecipesById(req.params.id);
        res.status(201).json(recipe);

    }catch(error) {
        res.status(501).json({
            message: error.toString()
        })
    }
})

router.get('/:id/shoppinglist', async (req, res) => {
    try{
        const recipe = await dbConnect.getShoppingList(req.params.id);
        res.status(201).json(recipe);

    }catch(error) {
        res.status(501).json({
            message: error.toString()
        })
    }
})

router.get('/:id/instructions', async (req, res) => {
    try{
        const instructions = await dbConnect.getInstructions(req.params.id);
        res.status(201).json(instructions);

    }catch(error) {
        res.status(501).json({
            message: error.toString()
        })
    }
})

module.exports = router;