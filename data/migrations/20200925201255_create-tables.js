
exports.up = function(knex) {
    return knex.schema
    .createTable('project', tbl => {
        tbl.increments('id');
        tbl.string('project_name', 128).notNullable();
        tbl.string('description', 255).notNullable();
        tbl.boolean('completed').notNullable().defaultTo(false);
    })
    .createTable('resource', tbl => {
        tbl.increments('id');
        tbl.string('resource_name', 128).notNullable();
        tbl.string('description', 255).notNullable();
    })
    .createTable('task', tbl => {
        tbl.increments('id');
        tbl.string('description', 255).notNullable();
        tbl.string('notes', 255);
        tbl.boolean('completed').notNullable().defaultTo(false);
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
    .createTable('project_resources', tbl => {
        tbl.integer('project_id')   
            .unsigned()
            .notNullable()
            .references('project.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('resource.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.primary(['resource_id', 'project_id']);
    })
  
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('task')
        .dropTableIfExists('resource')
        .dropTableIfExists('project')
};
