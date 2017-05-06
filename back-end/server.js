var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

var User = mongoose.model('User', {
    firstname: String,
    lastname: String,
    username: String,
    password: String,
    empType: String
})

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
})

app.get('/api/user', getUsers);


app.post('/api/user', function (req, res) {
    console.log(req.body);
    var user = new User(req.body);
    user.save()
    res.status(200);
})

mongoose.connect("mongodb://localhost:27017/test", function (err, db) {
    if (!err) {
        console.log("Connected to mongodb!");
    }
})

function getUsers(req, res) {
    User.find({}).exec(function (err, result) {
        res.send(result);
    })
}
var server = app.listen(5000, function () {
    console.log('server listen on port 5000')
})