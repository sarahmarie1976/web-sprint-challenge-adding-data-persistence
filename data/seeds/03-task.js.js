exports.seed = function(knex) {
 
  return knex('task').del()
    .then(function () {
      
      return knex('task').insert([
        { description: 'work on review repo', notes: 'follow notes', completed: 'false', project_id: 1 },
        { description: 'Work on getting rid of clutter', notes: 'listen to podcast', completed: 'false', project_id: 2 },
        { description: 'Take Nala to vet', notes: 'follow up on bronchitis', completed: 'true', project_id: 3 },
      ]);
    });
};

