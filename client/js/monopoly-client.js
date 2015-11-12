var url="http://127.0.0.1:1337/";

function inicio(){
	mostrarBotonPedirFicha();
}

//Funciones para modificar el index.html

function mostrarBotonPedirFicha(){
	$("#botones").append("<p id='zonaPedir'>Nombre: <input type='text' id='nombre' /><button id='pedirBtn'>Pedir Ficha</button></p>");
	$('#pedirBtn').on("click",function(){	
		obtenerFicha($("#nombre").val());
	})
}

function quitarBotonPedir(){
	$("#zonaPedir").remove();
}

function mostrarDatosJugador(nombre){
	mostrarNombre(nombre)
}

function mostrarNombre(nombre){
	$("#nombre").remove();
	$("#resultados").append("<p id='nombre'>Nombre: "+nombre+"</p>");
}

//Funciones para comunicar con el servidor
function obtenerFicha(nombre){
	$.getJSON(url+"nuevoJugador/"+nombre,function(data){
		//guardarCookies(data);
		quitarBotonPedir();
		mostrarDatosJugador(data.nombre);
	})
}