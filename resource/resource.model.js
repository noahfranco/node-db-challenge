const db = require("../data/db-config.js"); 
module.exports = {
    find, 
    add, 
    findById
}

// It's working :)
function find() {
    return db("resources") 
}

// It's working :)
function add(resource) {
    return db("resources")
    .insert(resource)
    .then(([id]) => {
        findById(id)
    })
}

// It's working :)
function findById(id) {
    return db("resources")
    .where({ id })
    .first()
}