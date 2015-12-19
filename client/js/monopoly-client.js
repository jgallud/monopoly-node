var url="http://127.0.0.1:1337/";
var coord=[];
var colorFicha=["red","blue","green","black","yellow","grey"];
var fichas={lista:colorFicha}
var posiciones=[];

function inicio(){
	cargarTablero();
	cargarCoordenadas();
	mostrarBotonPedirFicha();
	
	posiciones["red"]=20;
	cargarFichas(1,ponerFicha);
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

function mostrarDatosJugador(nombre,uid){
	mostrarNombre(nombre);
	mostrarUid(uid);
	posiciones["red"]=0;
	cargarFichas(1,ponerFicha);
}

function mostrarNombre(nombre){
	$("#nombre").remove();
	$("#resultados").append("<p id='nombre'>Nombre: "+nombre+"</p>");
}

function mostrarUid(uid){
	$("#uid").remove();
	$("#resultados").append("<p id='uid'>uid: "+uid+"</p>");	
}

//Funciones para comunicar con el servidor
function obtenerFicha(nombre){
	$.getJSON(url+"nuevoJugador/"+nombre,function(data){
		//guardarCookies(data);
		quitarBotonPedir();
		mostrarDatosJugador(data.nombre,data.uid);
	})
}

//funciones para dibujar el tablero y las fichas

function cargarTablero(){
	var canvas=document.getElementById("micanvas");
	ctx=canvas.getContext("2d");
	maxX=canvas.width;
	maxY=canvas.height;
	img=new Image();
	img.src="client/img/tablero.png";
	ctx.drawImage(img,0,0);
	img.onload=function(){
		ctx.drawImage(img,0,0);
	}
}

function cargarFichas(numJug,callback){
	var cont=0;
	//numJug=parseInt($.cookie("numJug")); 
	for(var i=0;i<numJug;i++){ //colorFicha.length
		var color=colorFicha[i];
		var imag=new Image();
		imag.src="client/img/"+color+".png";
		fichas.lista[color]=imag;
		//fichas.posicion[color]=0;
		ctx.drawImage(fichas.lista[color],maxX,maxY);
		fichas.lista[color].onload=function(){
			//ctx.drawImage(fichas.lista[color],maxX-70,maxY-70,30,30);
			if (++cont>=numJug){
				callback();
			}
		}
	}	
}

function cargarCoordenadas(){
	for(i=0;i<40;i++) coord[i]=[];
	inc=55;
	coord[0].push(maxX-inc*1.5)
	coord[0].push(maxY-inc*1.5);

	//coord[10].push(coord[9][0]-inc)
	//coord[10].push(coord[9][1]);
	
	coord[20].push(inc)
	coord[20].push(inc);

	coord[30].push(maxX-inc)
	coord[30].push(inc);
}

function ponerFicha(){
	var x,y;
	var color="red";
	var posicion=posiciones[color];
	console.log(color+" "+posicion);
	if (posicion>=0 && posicion<40){
		x=coord[posicion][0];
		y=coord[posicion][1];
		ctx.drawImage(fichas.lista[color],x,y,30,30);
	}
}
