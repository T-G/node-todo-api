// Library Variable
var express = require('express');
var bodyParser = require('body-parser');

// Local Variable
// var mongoose = require('./db/mongoose');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app = express();

app.use(bodyParser.json());

app.post('/todos',(req, res)=>{
    var todos = new Todo({
        text: req.body.text
    });

    todos.save().then((doc)=>{
        res.status(201).send(doc);
    },(e)=>{
        res.status(400).send(e);
    });
});

app.listen(3000, ()=>{
    console.log('Server is up and running on port: 3000');
});