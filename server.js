import config from './config';
import express from 'express';
import fs from 'fs';

const server = express();

// second argument is the event handler
server.get("/", (req,res)=>{
    res.send("hello express");
});

server.get("/about.html", (req,res)=>{
    fs.readFile('./about.html',(err,data) =>{
        res.send(data.toString());
    });
});

server.listen(config.port,()=>{
    console.info("Express listening on port:"+config.port);
});