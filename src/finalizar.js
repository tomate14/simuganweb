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
		let VariacionesReact = {}

		VariacionesReact.ensilaje = states.ensilaje;
		let jsonString= JSON.stringify(VariacionesReact.ensilaje);

		VariacionesReact.recursosforrajeros = states.recursosforrajeros;
		 jsonString= JSON.stringify(VariacionesReact.recursosforrajeros);

		VariacionesReact.potreros = states.potreros;
		 jsonString= JSON.stringify(VariacionesReact);

		VariacionesReact.rastrojos = states.rastrojos;
		 jsonString= JSON.stringify(VariacionesReact.rastrojos);

		VariacionesReact.mobs = states.mobs;
		 jsonString= JSON.stringify(VariacionesReact.mobs);

		VariacionesReact.invernada = states.invernada;
		 jsonString= JSON.stringify(VariacionesReact.invernada);

		VariacionesReact.feedlot = states.feedlot;
		 jsonString= JSON.stringify(VariacionesReact.feedlot);

		VariacionesReact.engorde = states.engorde;
		 jsonString= JSON.stringify(VariacionesReact.engorde);

		VariacionesReact.diferidos = states.diferidos;
		 jsonString= JSON.stringify(VariacionesReact.diferidos);

		VariacionesReact.destete = states.destete;
		 jsonString= JSON.stringify(VariacionesReact.destete);

		 jsonString= JSON.stringify(VariacionesReact);

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