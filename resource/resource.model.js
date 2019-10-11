const db = require("../data/db-config.js"); 
module.exports = {
    find, 
    add, 
    findById
}

function find() {
    return db("resources") 
}

function add(resource) {
    return db("resources")
    .insert(resource)
    .then(([id]) => {
        findById(id)
    })
}

function findById(id) {
    return db("resources")
    .where({ id })
    .first()
}