const db = require("../data/db-config.js"); 

module.exports = {
   find, 
   findById, 
   add, 
//    addTask,
//    findTask 
}

// It works :)
function find() {
    return db("projects")

}

// It works :)
function add(project) {
    return db("projects")
    .insert(project)
    .then(([id]) => {
        findById(id)
    })
}

// It works :)
function findById(id) {
    return db("projects")
    .where({ id })
    .first()
}




// ********** Adding Task **********

// function addTask(id, task) {
//     return db("task")
//     .where({ project_id: id })
//     .insert(task)
// }



