const knex = require('knex');
const db = knex(require('../../knexfile').development);

module.exports = {
    getRecipes,
    getShoppingList
}

function getRecipes() {
    return db('recipes')
        .select("recipeName")
        // .join("steps", "recipes.id", "steps.recipe_id")
};

function getShoppingList(id) {
    return db('recipes')
            .join("quantity", "recipes.id", "quantity.recipe_id")
            .join("ingredients", "quantity.ingredient_id", "ingredients.id")
            .select("recipes.recipeName","ingredients.ingredientName", "quantity.quantity")
            .where( { "recipes.id": id })
}