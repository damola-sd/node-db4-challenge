const knex = require('knex');
const db = knex(require('../../knexfile').development);

module.exports = {
    getRecipes
}

function getRecipes() {
    return db('recipes')
        .select("recipeName")
        // .join("steps", "recipes.id", "steps.recipe_id")
};

function getShoppingList() {
    return db('recipes')
        .se
}