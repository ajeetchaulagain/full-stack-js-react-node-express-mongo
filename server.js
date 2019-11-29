import config from './config';
import express from 'express';
import apiRouter from './api'


const server = express();

server.set('view engine','ejs');


// second argument is the event handler
server.get("/", (req,res)=>{
    res.render('index',{
        content: "Hello content from <strong>express<strong>"
    });
});

server.use('/api',apiRouter);
server.use(express.static('public'));

server.listen(config.port,()=>{
    console.info("Express listening on port:"+config.port);
});