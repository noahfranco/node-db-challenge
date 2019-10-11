const db = require("../data/db-config.js"); 

module.exports = {
   find, 
   findById, 
   add, 
   addTask,
   findTask 
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

// Below are the Task 

function findTask() {
    return db("task")
    .then(tasks => {
        tasks.map(task => {
            if(task.completed) {
                task.completed = true 
            } else {
                task.completed = false 
            }
        })
        return tasks
    })
}

function addTask(task, id) {
    return db("task")
    .where({ project_id: id })
    .insert(task)
}


