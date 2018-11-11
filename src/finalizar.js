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

		VariacionesReact.ensilaje.leftoverVariaciones = states.ensilaje.leftoverVariaciones;
		VariacionesReact.ensilaje.triggerVariaciones = states.ensilaje.triggerVariaciones;

		let jsonString= JSON.stringify(VariacionesReact.ensilaje);

		VariacionesReact.recursosforrajeros.PagVariaciones = states.recursosforrajeros.pagvariaciones;
		jsonString= JSON.stringify(VariacionesReact.recursosforrajeros);

		VariacionesReact.potreros.digestibilidadVariaciones = states.potreros.digestibilidadVariaciones;
		jsonString= JSON.stringify(VariacionesReact);

		VariacionesReact.rastrojos.digestibilidadVariaciones = states.rastrojos.digestibilidadVariaciones;
		VariacionesReact.rastrojos.rindeVariaciones = states.rastrojos.rindeVariaciones;
		


		//VariacionesReact.invernada = states.invernada;
		VariacionesReact.invernada.VaquillonaVariaciones = states.invernada.VaquillonaVariaciones;
		VariacionesReact.invernada.nobillosVariaciones  = states.invernada.nobillosVariaciones;
		 jsonString= JSON.stringify(VariacionesReact.invernada);

		VariacionesReact.feedlot.VariacionFeedLot = states.feedlot.pagvariaciones;
		jsonString= JSON.stringify(VariacionesReact.feedlot);
		jsonString= JSON.stringify(VariacionesReact);

		VariacionesReact.engorde = states.engorde;
		 jsonString= JSON.stringify(VariacionesReact.engorde);

		VariacionesReact.diferidos = states.diferidos;
		 jsonString= JSON.stringify(VariacionesReact.diferidos);

		VariacionesReact.destete = states.destete;
		 jsonString= JSON.stringify(VariacionesReact.destete);

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