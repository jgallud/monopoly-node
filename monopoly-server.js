var fs=require("fs");
var express=require("express");
//var path=require("path");
var modelo=require("./server/juego.js");

var http=require("http");

var config=JSON.parse(fs.readFileSync("./config.json"));
var host=config.host;
var port=config.port;

//var application_root=__dirname;


var app=express();
var server=http.createServer(app);


var juego=new modelo.Juego();
console.log(juego.fase);

//app.use("/",express.static(__dirname));


app.get("/",function(request,response){
	var contenido=fs.readFileSync("./client/index.html");
	response.setHeader("Content-type","text/html");
	response.send(contenido);
});


server.listen(port,host);
console.log("Servidor iniciado en puerto: "+port);