import store from './index.js';

//Config Store

function validarCargaDatos(states){
	for (let prop in states) {
        // skip loop if the property is from prototype
        if((states[prop].permitido ==true) && (states[prop].cantVariaciones == 0)){
        	console.log("asd");
        	return false;
        }

       
    }
    return true;
}
export function generarSalidaRest(){
	let states = store.getState();
	if(validarCargaDatos(states)){
		let VariacionesReact = {};
		VariacionesReact.ensilaje = {};
		VariacionesReact.recursosforrajeros={};
		VariacionesReact.potreros={};
		VariacionesReact.rastrojos={};
		VariacionesReact.invernada={};
		VariacionesReact.feedlot={};
		VariacionesReact.diferidos = {};
		VariacionesReact.destete = {};

		/* 
		           GENERO ENSILAJE 
		*/

		VariacionesReact.ensilaje.leftoverVariaciones = states.ensilaje.leftoverVariaciones;
		VariacionesReact.ensilaje.triggerVariaciones = states.ensilaje.triggerVariaciones;
		let jsonString= JSON.stringify(VariacionesReact.ensilaje);

		VariacionesReact.recursosforrajeros.PagVariaciones = states.recursosforrajeros.pagvariaciones;
		jsonString= JSON.stringify(VariacionesReact.recursosforrajeros);

		/* 
		           GENERO LOS POTREROS 
		*/
		VariacionesReact.potreros.pasturas = states.potreros.digestibilidadVariaciones;
		let ObjetoPastura = {};
		for(let i = 0; i< VariacionesReact.potreros.pasturas.length; i++ ){
			ObjetoPastura = {}
			ObjetoPastura.pastura = VariacionesReact.potreros.pasturas[i];
			VariacionesReact.potreros.pasturas[i] = ObjetoPastura;
		}
		jsonString= JSON.stringify(VariacionesReact.potreros);

		/* 
		           GENERO LOS RASTROJOS 
		*/
		VariacionesReact.rastrojos.digestibilidadVariaciones = states.rastrojos.digestibilidadVariaciones;
		VariacionesReact.rastrojos.rindeVariaciones          = states.rastrojos.rindeVariaciones;
		for(let i = 0; i< VariacionesReact.rastrojos.digestibilidadVariaciones.length; i++ ){
			ObjetoPastura = {}
			ObjetoPastura.pastura = VariacionesReact.rastrojos.digestibilidadVariaciones[i];
			VariacionesReact.rastrojos.digestibilidadVariaciones[i] = ObjetoPastura;
			ObjetoPastura.pastura = VariacionesReact.rastrojos.rindeVariaciones[i];
			VariacionesReact.rastrojos.rindeVariaciones[i] = ObjetoPastura;
		}		
		jsonString= JSON.stringify(VariacionesReact.rastrojos);

		/*
			GENERO LOS DIFERIDOS
		*/
		VariacionesReact.diferidos.digestibilidadVariaciones = states.diferidos.digestibilidadVariaciones;
		VariacionesReact.diferidos.rindeVariaciones = states.diferidos.rindeVariaciones;
		for(let i = 0; i< VariacionesReact.diferidos.digestibilidadVariaciones.length; i++ ){
			ObjetoPastura = {}
			ObjetoPastura.pastura = VariacionesReact.diferidos.digestibilidadVariaciones[i];
			VariacionesReact.diferidos.digestibilidadVariaciones[i] = ObjetoPastura;
			ObjetoPastura.pastura = VariacionesReact.diferidos.rindeVariaciones[i];
			VariacionesReact.diferidos.rindeVariaciones[i] = ObjetoPastura;
		}

		jsonString= JSON.stringify(VariacionesReact.diferidos);

		//VariacionesReact.invernada = states.invernada;
		VariacionesReact.invernada.VaquillonaVariaciones = states.invernada.VaquillonaVariaciones;
		VariacionesReact.invernada.nobillosVariaciones  = states.invernada.nobillosVariaciones;
		jsonString= JSON.stringify(VariacionesReact.invernada);

		VariacionesReact.feedlot.VariacionFeedLot = states.feedlot.pagvariaciones;

		let ObjetoCompletion = {};
		let ObjetoFattening = {};
		for(let i = 0; i< VariacionesReact.feedlot.VariacionFeedLot.length; i++){
			ObjetoCompletion = {};
			ObjetoCompletion.pesominimo         = VariacionesReact.feedlot.VariacionFeedLot[i].Completion[0];
			ObjetoCompletion.pesomaximo         = VariacionesReact.feedlot.VariacionFeedLot[i].Completion[1];
			ObjetoCompletion.pesovivo           = VariacionesReact.feedlot.VariacionFeedLot[i].Completion[2];
			ObjetoCompletion.proteinabruta      = VariacionesReact.feedlot.VariacionFeedLot[i].Completion[3];
			ObjetoCompletion.digestibilidad     = VariacionesReact.feedlot.VariacionFeedLot[i].Completion[4];
			ObjetoCompletion.consumo            = VariacionesReact.feedlot.VariacionFeedLot[i].Completion[5];
			ObjetoCompletion.proteinadegradable = VariacionesReact.feedlot.VariacionFeedLot[i].Completion[6];
			ObjetoFattening = {};
			ObjetoFattening.pesominimo         = VariacionesReact.feedlot.VariacionFeedLot[i].Fattening[0];
			ObjetoFattening.pesomaximo         = VariacionesReact.feedlot.VariacionFeedLot[i].Fattening[1];
			ObjetoFattening.pesovivo           = VariacionesReact.feedlot.VariacionFeedLot[i].Fattening[2];
			ObjetoFattening.proteinabruta      = VariacionesReact.feedlot.VariacionFeedLot[i].Fattening[3];
			ObjetoFattening.digestibilidad     = VariacionesReact.feedlot.VariacionFeedLot[i].Fattening[4];
			ObjetoFattening.consumo            = VariacionesReact.feedlot.VariacionFeedLot[i].Fattening[5];
			ObjetoFattening.proteinadegradable = VariacionesReact.feedlot.VariacionFeedLot[i].Fattening[6];
			
			VariacionesReact.feedlot.VariacionFeedLot[i].Completion = ObjetoCompletion;
			VariacionesReact.feedlot.VariacionFeedLot[i].Fattening = ObjetoFattening;

		}

		jsonString= JSON.stringify(VariacionesReact.feedlot);
		jsonString= JSON.stringify(VariacionesReact);


		jsonString= JSON.stringify(VariacionesReact);

		 VariacionesReact.engorde = states.engorde;
		// jsonString= JSON.stringify(VariacionesReact.engorde);

		/*VariacionesReact.destete = states.destete;
		VariacionesReact.destete.variaciones = states.destete.pagvariaciones;
		for(let array in VariacionesReact.destete.variaciones){
			let objetoDestete = {};
			for(let i = 0; i<array.length;i++)
				objetoDestete = {};
				objetoDestete.umbral    = array[i].Destete[0];
				objetoDestete.reglapeso = array[i].Destete[0];
				objetoDestete.Umbral = array[i].Destete[0];
				objetoDestete.Umbral = array[i].Destete[0];
				objetoDestete.Umbral = array[i].Destete[0];
				objetoDestete.Umbral = array[i].Destete[0];
				objetoDestete.Umbral = array[i].Destete[0];
				objetoDestete.Umbral = array[i].Destete[0];
				objetoDestete.Umbral = array[i].Destete[0];




		}
		 jsonString= JSON.stringify(VariacionesReact.destete);*/

		 jsonString= JSON.stringify(VariacionesReact);

		 VariacionesReact.mobs = states.mobs;
		VariacionesReact.mobs.valoresSimulacion = [];
		jsonString= JSON.stringify(VariacionesReact.mobs);
		console.log(jsonString);

		console.log("Generacion exitosa "+jsonString);
	}else{
		console.log("Error de validacion de datos, verifique");
	}
	 
	
	/*states.forEach(function(element) {
	  if((element.permitido == true) &&(element.cantVariaciones == 0)){
	  		console.log("ERROR DE CARGA");
	  }
	});*/
	console.log("aux");
}