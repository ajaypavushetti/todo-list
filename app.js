const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); 
app.set('view engine', 'ejs');
var inp = [];
app.get("/", function(req, res) {
    res.render('index', { listitem: inp });
});
app.post("/", function(req, res) {
    var ano = req.body.newinput;
    inp.push(ano);
    res.redirect("/"); 
});
app.post("/delete", function(req, res) {
    var index = req.body.index;
    inp.splice(index, 1); 
    res.redirect("/"); 
});
app.listen(port, function() {
   
});
