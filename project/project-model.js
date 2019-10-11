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





// function findTask(id) {
//     return db("task")
//     .innerJoin(
//         "projects",
//         "project_id",
//         "task.project_id"
//     )
//     .select("task.id", "projects.name", "projects.description", "task.notes", "task.description")
//     .where("project_id", id)
// }



// function addTask(id, task) {
//     return db("task")
//     .where({ project_id: id })
//     .insert(task)
// }



