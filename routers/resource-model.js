const db = require('../data/db-config.js');

module.exports = {
    getResource,
    addResource,
    findById, 
    remove
}

function getResource(){
    return db('resource')
}

function findById(id){
    return db('resource')
        .where({id})
        .first();
}

function addResource(resource){
    return db('resource')
        .insert(resource, 'id')
        .then(id => {
            return findById(id[0])
        })
}

function remove(id) {
    return db('resource')
    .where({ id })
    .del();
}
