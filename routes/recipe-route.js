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


module.exports = router;