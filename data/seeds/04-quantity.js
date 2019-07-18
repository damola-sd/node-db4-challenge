
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('quantity').del()
    .then(function () {
      // Inserts seed entries
      return knex('quantity').insert([
        { recipe_id: 1, ingredient_id: 1, quantity: '1 piece'},
        { recipe_id: 2, ingredient_id: 2, quantity: '1 400mg Sachet'},
        { recipe_id: 2, ingredient_id: 3, quantity: '1 Lb'},
        { recipe_id: 3, ingredient_id: 4, quantity: '2 120mg pack'},
      ]);
    });
};
