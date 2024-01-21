var express = require("express");
var app = express();

var port = 3000;

app.listen(port, ()=>{
    console.log(`App is listening on ${port}`);
});

app.get("/register", (req, res)=>{
    let {username, password} =  req.query;
    res.send(`Welcome ${username}`)
});

app.use(express.urlencoded({extended: true})); // used for accepting encoded data
app.use(express.json()); // used for accepting json data

app.post("/register2", (req, res)=>{
    // in req.body is undefined when encoded data is send and blank object if json is send and to fix it we have to add above line
    let {username, password} =  req.body; 
    res.send(`Welcome ${username}`)
});