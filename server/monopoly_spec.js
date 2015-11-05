var modulo=require("./juego.js");
//var modelo=require("./modelo.js");

describe("Test del Monopoly",function(){
	var juego;
	
	beforeEach(function(){
		juego = new modulo.Juego()
		//juego.iniJuego();
		//tablero=juego.getTablero();
	});
	describe("El juego se ha iniciado. ",function(){
		it("El juego tiene fases",function(){
			expect(juego.fase).toEqual("Inicial");
		})
	})
})