const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

MongoClient.connect('mongodb+srv://diazedward24:Q2G5YlRdkYsfooWP@cluster0.xn7hvno.mongodb.net/');

app.get('/', function (req, res){
    res.sendFile(__dirname + '/index.html');
});

app.post('/users', (req, res) => {
    console.log(req.body);
});


app.listen(PORT, function() {
    console.log(`Server is live! Listening at port ${PORT}`);
});