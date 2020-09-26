const db = require('../data/db-config.js');

module.exports = {
    getTask,
    addTask,
    findById, 
    remove
}

function getTask(){
    return db('task')
}

function findById(id){
    return db('task')
        .where({id})
        .first();
}

function addTask(task){
    return db('task')
        .insert(task, 'id')
        .then(id => {
            return findById(id[0])
        })
}

function remove(id) {
    return db('task')
    .where({ id })
    .del();
}
