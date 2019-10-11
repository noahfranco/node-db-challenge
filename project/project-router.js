const express = require("express"); 

// Logic behind end points 
const Projects = require("./project-model.js"); 

const router = express.Router(); 

router.get("/", (req, res) => { // localhost:5000/api/project
    Projects.find()
    .then(project => {
        res.status(200).json(project)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({error: "Failed to get Projects"})
    })
})

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

router.get("/:id", (req, res) => { // localhost:5000/api/project/:id
    const { id } = req.params 

    Projects.findById(id)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({error: "Failed to get by id Projects"})
    })
})

// Adding Task

router.get("/task", (req, res) => { // localhost:5000/api/project/:id/task
    Projects.findTask()
    .then(task => {
        res.status(200).json(task)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({error: "Failed to get Task"})
    })
})

router.post("/:id/task", (req, res) => { // localhost:5000/api/project/task
    const { id } = req.params
    const taskBody = req.body
    
    Projects.findById(id, taskBody)
    .then(tasks => {
        res.status(200).json(tasks)
    })
    .catch(error => { 
        console.log(error)
        res.status(500).json({error: "Failed to post new Task from Projects"})
    })
})




module.exports = router; 