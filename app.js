const express=require("express");
const bodyparser=require("body-parser");
const app=express();
const port=3000;
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public")); 

app.set('view engine','ejs');
var inp=[];
app.get("/",function(req,res){
    res.render('index',{listitem:inp});
})
app.post("/",function(req,res){
 var ano= req.body.newinput;
 inp.push(ano);
res.redirect("/");
})
app.post("/delete",function(req,res){
    var del=req.body.index;
    inp.splice(del,1);
    res.redirect("/");
})

app.listen(port,function(){
})