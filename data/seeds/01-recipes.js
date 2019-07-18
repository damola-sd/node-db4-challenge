
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { recipeName: 'Boiled Egg'},
        { recipeName: 'Mac and Cheese'},
        { recipeName: 'Instant Noodles'}
      ]);
    });
};
