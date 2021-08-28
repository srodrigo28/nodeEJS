const express = require('express');
let app = express();

app.use(express.static("public")); // serve para buscar, css, javascrip, img
var path = require("path"); // serve para buscar um caminho para arquivos

app.listen(8081, function(){
    console.log('Executando...')
});

app.get("/", function(req, res){
    //res.send("<h1> Olá mundo !</h1>");
    res.sendFile(__dirname + "/public/page/index.html");
})

app.get("/home", function(req, res){
    res.sendFile(__dirname + "/public/page/index.html");
})

app.get("/contato", function(req, res){
    res.sendFile(__dirname + "/public/page/contato.html");
})

app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/public/page/sobre.html");
})