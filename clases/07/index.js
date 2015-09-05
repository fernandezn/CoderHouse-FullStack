var mod 	= require("./miModulo");
var otroMod = require("./otroModulo");
var fs 		= require("fs");
var ld		= require("lodash");

fs.writeFile("message.txt", "Hola Mundo", function(err){
	if (!err){
		console.log("Ok");
	} else{
		console.log("Hubo un Error");
	}
});

var saludo = "Hola";

var saludar = function(){
	return "Hola Mundo";
}

console.log(mod);
console.log(otroMod);

console.log(ld.now());