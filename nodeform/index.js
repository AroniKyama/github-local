var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require('body-parser');
var port = 3000;
 
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/node-demo");

//body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//schema
var nameSchema = new mongoose.Schema({
    firstName: String,
    lastNameName: String
  });

  var User = mongoose.model("User", nameSchema);


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/addname", (req, res) => {
    var myData = new User(req.body);
    myData.save()
      .then(item => {
        res.send("item saved to database");
      })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });
  });
 
app.listen(port, () => {
  console.log("Server listening on port " + port);
});