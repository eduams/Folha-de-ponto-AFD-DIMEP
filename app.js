const express = require('express');
const app = express();
const http = require('http');
const fs = require('fs');
const path = require('path');

app.use(express.json());
app.use(express.static('express'));
app.use(express.static('public'));
app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, ()=>{
    console.log('Server listening on port 3000');
})