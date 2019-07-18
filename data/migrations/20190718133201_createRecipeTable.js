
exports.up = function (knex) {
    return knex.schema
        .createTable('recipes', table => {
            table.increments();
            table.text('recipeName', 128).notNullable();
        })
        .createTable('ingredients', table => {
            table.increments();
            table.text('ingredientName', 200).unique().notNullable();
        })
        .createTable('steps', table => {
            table.increments();
            table.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes');
            table.integer('step_number')
                .unsigned()
                .notNullable();
            table.text('instructions')
                .notNullable();
        })
        .createTable('quantity', table => {
            table.increments();
            table.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes');
            table.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('ingredients');
            table.text('quantity')
                .notNullable();
        })
};

exports.down = function (knex) {
    return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('quantity');
};
