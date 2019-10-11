const express = require("express"); 

// Logic behind end points 
const Resource = require("../resource/resource.model.js");  

const router = express.Router(); 

router.get("/", (req, res) => { // localhost:5000/api/resource

})

router.post("/", (req, res) => { // localhost:5000/api/resource

})

router.get("/:id", (req, res) => { // localhost:5000/api/resource/:id

})

router.put("/:id", (req, res) => { // localhost:5000/api/resource/:id

})

router.delete("/:id", (req, res) => { // localhost:5000/api/resource/:id

})

module.exports = router; 