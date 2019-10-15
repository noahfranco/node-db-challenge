const express = require("express"); 

const Projects = require("./project-model.js"); 

// For project task
const db = require("../data/db-config.js"); 

const router = express.Router(); 

// It's working :)
router.get("/", (req, res) => { // localhost:5000/api/project
    Projects.find()
    .then(projects => {
        const changeCompleted = projects.map(project => {
            return {
              ...project,
              completed: !!Number(project.completed)
            }
          })
        res.status(200).json(changeCompleted)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({error: "Failed to get Projects"})
    })
})

// It's working :)
router.post("/", (req, res) => { // localhost:5000/api/project
    const projectBody = req.body
    
    Projects.add(projectBody) 
    .then(project => {
        res.status(200).json(project)
    })
    .catch(error => { 
        console.log(error)
        res.status(500).json({error: "Failed to post Projects"})
    })
})

// It's working :)
router.get("/:id", (req, res) => { // localhost:5000/api/project/:id
    const { id } = req.params 
    if(!id) {
        res.status(404).json({error: "Sorry User was not found"})   
    } else {
        Projects.findById(id)
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(error => {
        console.log(error)
        res.status(500).json({error: "Failed to get by id on Projects"})
        })
    }
})

// ********** Adding Task **********

// It's working :)
router.get("/:id/task", (req, res) => { // localhost:5000/api/:id/project/task
    const { id } = req.params

    db("projects")
    .where({ id })
    .then(project => {
        const projectCompleted = project.map(task => {
            return {
              ...task,
              completed: !!Number(task.completed)
            }
          })
       db("task")
        .where({ project_id: id })
        .then(tasks => {
            const changeCompleted = tasks.map(task => {
                return {
                  ...task,
                  completed: !!Number(task.completed)
                }
              })
            res.status(200).json({...projectCompleted[0], changeCompleted }) 
        })
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({error: "Failed to get Task"})
    })
})




// router.post("/:id/task", (req, res) => { // localhost:5000/api/id/project/task
//     const { id } = req.params
//     const taskBody = req.body
    
//     Projects.addTask( id, taskBody)
//     .then(tasks => {
//         res.status(200).json(tasks)
//     })
//     .catch(error => { 
//         console.log(error)
//         res.status(500).json({error: "Failed to post new Task from Projects"})
//     })
// })


router.post("/task", (req, res) => { // localhost:5000/api/:id/project/task
    const taskBody = req.body

    db("task")
    .insert(taskBody)
    .then(tasks => {
        const id = tasks[0]
        db("task")
        .where({ id })
        .first()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({error: "Failed to get Task"})
        })
    })
})




module.exports = router; 