exports.seed = function(knex) {
  return knex('project').del()
    .then(function () {
    
      return knex('project').insert([
        { project_name: 'work on practice review for class', description: 'fork project, clone it, set up my npm installs, read the readme', completed: 'false'},

        { project_name: 'clean out closet', description: 'separate what I want and what I can donate', completed: 'false'},

        { project_name: 'take Nala to the vet', description: 'follow up exam', completed: 'true'}
      ]);
    });
};