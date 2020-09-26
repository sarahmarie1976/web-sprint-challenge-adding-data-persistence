exports.seed = function(knex) {
  
  return knex('resource').del()
    .then(function () {
      
      return knex('resource').insert([
        { resource_name: 'Node-db-practice-sprint', description: 'https://github.com/WebPT17-Sprint-Practice/node-db-practice'},
        { resource_name: 'Becomingminimalist article', description: 'https://www.becomingminimalist.com/creative-ways-to-declutter/'},
        { resource_name: 'The learn to mediate online podcast', description: 'https://podcasts.apple.com/us/podcast/the-learn-to-mediate-online-podcast-from-susan-guthrie-esq/id1506641323'},
        
      ]);
    });
};