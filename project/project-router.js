const express = require("express"); 

// Logic behind end points 
const Project = require("./project-model.js"); 

const router = express.Router(); 

router.get("/", (req, res) => { // localhost:5000/api/project

})

router.post("/", (req, res) => { // localhost:5000/api/project

})

router.get("/:id", (req, res) => { // localhost:5000/api/project/:id

})

// Adding Task

router.post("/task", (req, res) => { // localhost:5000/api/project

})

router.get("/:id/task", (req, res) => { // localhost:5000/api/project

})




module.exports = router; 