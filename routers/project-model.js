const db = require('../data/db-config.js');

module.exports = {
    getProjects,
    addProjects,
    findById, 
    remove
}

function getProjects(){
    return db('project')
}

function findById(id){
    return db('project')
        .where({id})
        .first();
}

function addProjects(project){
    return db('project')
        .insert(project, 'id')
        .then(id => {
            return findById(id[0])
        })
}

function remove(id) {
    return db('project')
    .where({ id })
    .del();
}
