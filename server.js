// Boilerplate ====================
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var path = require("path");
// ================================

// Server Port ====================
var PORT = process.env.PORT || 3000;
// ================================


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Arrays storing user data ==================
var tables = [
    {
        routeName: "test",
        name: "test",
        email: "test",
        phone: "test",
        id: "test",
    }
]

var waitList = [
    {
        routeName: "test",
        name: "test",
        email: "test",
        phone: "test",
        id: "test",
    }
]

// Arrays storing user data ===================


// Routing ====================================
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/wait", function(req, res) {
    res.sendFile(path.join(__dirname, "wait.html"));
});

app.get("/api/tables", function(req, res) {
    return res.json(tables);
});

app.get("/api/wait", function(req, res) {
    return res.json(waitList);
});

app.get("/api/tables/:tables", function(req, res) {
    var userData = req.params.tables;

    console.log(userData);

    for(var i in tables) {
        if(userData === tables[i].routeName) {
            return res.json(userData[i]);
        }
    }

    return res.json(false);
});

app.post("/", function(req, res) {
    var newUser = req.body;
    newUser.routeName = newUser.name.replace(/\s+/g,"").toLowerCase();
    console.log(newUser);
    res.json(tables);
});

// Routing ====================================


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});