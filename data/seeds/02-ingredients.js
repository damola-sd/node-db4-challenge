
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredientName: 'Egg'},
        { ingredientName: 'Macaroni'},
        { ingredientName: 'Cheese'},
        { ingredientName: 'Noodles'}
      ]);
    });
};

