var response = require("./respuesta");
var express  = require("express");
var https	 = require("https");
var app 	 = express();

app.get("/hola", function(req,res){
	console.log(response.print());
})

app.get("/alumno", function(req,res){
	res.json(response.json1);
});

app.get("/curso", function(req,res){
	res.json(response.json2);
});

app.get("/horario", function(req,res){
	res.json(response.json3);
});

app.get("/titulo", function(req,res){
	res.json(response.json4);
});

app.get("/meliProxy", function(req,res){

	var urlAPI = "https://api.mercadolibre.com/sites/MLA/search?q=" + req.query.q;
	https.get(urlAPI, function(resML){

	  var data = "";

	  resML.on('data', function(d) {
	   	data = data + d.toString();
	  });

	  resML.on('end', function(){
	  	res.json(data);
	  });

	}).on('error', function(e) {
  		console.error(e);
	});

});

app.listen(8045, function(){
	console.log("Servidor: http://localhost:8045");
})