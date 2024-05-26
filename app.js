const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');
let inp = [];
function readDataFromFile() {
        const data = fs.readFileSync("data.json", "utf8");
        inp = JSON.parse(data);
}
function writeDataToFile() {
        fs.writeFileSync("data.json", JSON.stringify(inp));
}
readDataFromFile();
app.get("/", function(req, res) {
    res.render('index', { listitem: inp });
});
app.post("/", function(req, res) {
    var ano = req.body.newinput;
    inp.push(ano);
    writeDataToFile(); 
    res.redirect("/");
});
app.post("/delete", function(req, res) {
    var index = req.body.index;
    inp.splice(index, 1); 
    writeDataToFile(); 
    res.redirect("/");
});
app.listen(3000, function() {
    
});
