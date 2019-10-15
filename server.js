const express = require('express');

const projectRouter = require("./project/project-router.js");
const resourceRouter =  require("./resource/resource-router.js");

const server = express();

server.use(express.json());
server.use('/api/project', projectRouter);
server.use("/api/resource", resourceRouter); 

module.exports = server;