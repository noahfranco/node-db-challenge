const express = require("express"); 

// Logic behind end points 
const Resource = require("../resource/resource.model.js");  

const router = express.Router(); 

// It's working :)
router.get("/", (req, res) => { // localhost:5000/api/resource
    Resource.find()
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({error: "Failed to get Resources"})
    })
})

// It's working :)
router.post("/", (req, res) => { // localhost:5000/api/resource
    const resourceBody = req.body
    
    Resource.add(resourceBody) 
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(error => { 
        console.log(error)
        res.status(500).json({error: "Failed to post Resources"})
    })
})

// It's working :)
router.get("/:id", (req, res) => { // localhost:5000/api/resource/:id
    const { id } = req.params 

    Resource.findById(id)
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({error: "Failed to get by id on Resources"})
    })
})

module.exports = router; 