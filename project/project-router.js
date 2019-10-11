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

router.put("/:id", (req, res) => { // localhost:5000/api/project/:id

})

router.delete("/:id", (req, res) => { // localhost:5000/api/project/:id

})

module.exports = router; 