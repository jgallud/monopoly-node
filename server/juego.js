function Juego(){
	this.nombre="juego";
	this.fase="Inicial";
	this.nuevoJugador=function(usr){
		console.log("nuevo jugador: "+usr.nombre);
	}
}

function Usuario(nombre){
	this.nombre=nombre;
	this.ficha="green";
}

module.exports.Juego=Juego;
module.exports.Usuario=Usuario;