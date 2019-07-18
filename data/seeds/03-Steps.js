
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        { recipe_id: 1, step_number: 1, instructions: 'Place pot of water on medium heat'},
        { recipe_id: 1, step_number: 2, instructions: 'Put egg into boiling water'},
        { recipe_id: 1, step_number: 3, instructions: 'When egg hardens, remove egg from boiling water'},
        { recipe_id: 3, step_number: 1, instructions: 'Place instant noodles in pot of boiling water'},
        { recipe_id: 3, step_number: 2, instructions: 'Add attached seasoning'},
        { recipe_id: 3, step_number: 3, instructions: 'Serve as prepared'},
      ]);
    });
};
