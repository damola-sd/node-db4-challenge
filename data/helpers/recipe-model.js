const knex = require('knex');
const db = knex(require('../../knexfile').development);

module.exports = {
    getRecipes,
    getRecipesById,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes')
        .select("recipeName")
        // .join("steps", "recipes.id", "steps.recipe_id")
};

function getRecipesById(id) {
    return db('recipes')
        .select("recipeName")
        .where({ id })
};

function getShoppingList(id) {
    return db('recipes')
            .join("quantity", "recipes.id", "quantity.recipe_id")
            .join("ingredients", "quantity.ingredient_id", "ingredients.id")
            .select("recipes.recipeName","ingredients.ingredientName", "quantity.quantity")
            .where( { "recipes.id": id })
}

function getInstructions(id) {
    return db('recipes')
            .join("steps", "recipes.id", "steps.recipe_id")
            .select("steps.instructions")
            .where({ "recipes.id": id })
}