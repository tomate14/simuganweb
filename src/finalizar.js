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
		VariacionesReact.mobs = {};

		/* 
		           GENERO ENSILAJE 
		*/
		if(states.ensilaje.permitido){
			VariacionesReact.ensilaje.leftoverMass = states.ensilaje.leftoverVariaciones;
			VariacionesReact.ensilaje.triggerMass = states.ensilaje.triggerVariaciones;
			let jsonString= JSON.stringify(VariacionesReact.ensilaje);
		}

		/* 
		           GENERO RECURSOSFORRAJEROS 
		*/
		if(states.recursosforrajeros.permitido){
			VariacionesReact.recursosforrajeros.ForrajeroVariaciones = states.recursosforrajeros.pagvariaciones;
			let ForrajeroPastura = {};
			let ForrajeroVariacion = {};
			for(let i = 0; i < VariacionesReact.recursosforrajeros.ForrajeroVariaciones.length; i++){
				ForrajeroPastura = {};
				ForrajeroPastura.ForrajeroPastura = VariacionesReact.recursosforrajeros.ForrajeroVariaciones[i];
				VariacionesReact.recursosforrajeros.ForrajeroVariaciones[i] = ForrajeroPastura;		
				
				let ValorMes = {}
				let ArrayForrajero = []
				for(let k = 0; k < 12; k++){
					ValorMes = {};
					ValorMes = VariacionesReact.recursosforrajeros.ForrajeroVariaciones[i].ForrajeroPastura[0][k];
					ArrayForrajero.push(ValorMes);					
				}
				VariacionesReact.recursosforrajeros.ForrajeroVariaciones[i].ForrajeroPastura = ArrayForrajero;
				
			}
			jsonString= JSON.stringify(VariacionesReact.recursosforrajeros);
		}
		

		/* 
		           GENERO LOS POTREROS 
		*/
		if(states.potreros.permitido){
			VariacionesReact.potreros.pasturas = states.potreros.digestibilidadVariaciones;
			let ObjetoPastura = {};
			for(let i = 0; i< VariacionesReact.potreros.pasturas.length; i++ ){
				ObjetoPastura = {}
				ObjetoPastura.pastura = VariacionesReact.potreros.pasturas[i];
				VariacionesReact.potreros.pasturas[i] = ObjetoPastura;
			}
			jsonString= JSON.stringify(VariacionesReact.potreros);
		}

		/* 
		           GENERO LOS RASTROJOS 
		*/
		if(states.rastrojos.permitido){
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
		}

		/*
			GENERO LOS DIFERIDOS
		*/
		if(states.diferidos.permitido){
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
		}

		/*
			GENERO INVERNADA
		*/
		if(states.invernada.permitido){
			VariacionesReact.invernada.VaquillonaVariaciones = states.invernada.VaquillonaVariaciones;
			VariacionesReact.invernada.nobillosVariaciones  = states.invernada.nobillosVariaciones;
			jsonString= JSON.stringify(VariacionesReact.invernada);
		}

		/*
			GENERO LOS FEEDLOT
		*/
		if(states.feedlot.permitido){
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
		}

		/*
			GENERACION DE MOBS
		*/
		if(states.mobs.permitido){
			VariacionesReact.mobs.Variaciones = states.mobs.arrayMobs;
			let ObjetoVariacion = {};
			for(let i = 0; i < VariacionesReact.mobs.Variaciones.length; i++){
				ObjetoVariacion = {};
				ObjetoVariacion.Variacion = VariacionesReact.mobs.Variaciones[i].pagvariaciones;
				VariacionesReact.mobs.Variaciones[i] = ObjetoVariacion;

				for(let j = 0; j < VariacionesReact.mobs.Variaciones[i].Variacion.length; j++){

					let arrayObjeto1 = []; let arrayObjeto2 = []; let arrayObjeto3 = []; let arrayObjeto4 = []; let arrayObjeto5 = [];
					let arrayWeaningObjeto1 = []; let arrayWeaningObjeto2 = []; let arrayWeaningObjeto3 = []; let arrayWeaningObjeto4 = []; let arrayWeaningObjeto5 = [];

					for(let k = 0; k < 12; k++){
						let ObjetoMeses1 = {}; let ObjetoMeses2 = {}; let ObjetoMeses3 = {}; let ObjetoMeses4 = {};	let ObjetoMeses5 = {};

						let ObjetoWeaningMeses1 = {}; let ObjetoWeaningMeses2 = {};	let ObjetoWeaningMeses3 = {}; let ObjetoWeaningMeses4 = {};	let ObjetoWeaningMeses5 = {};

						ObjetoMeses1 =	VariacionesReact.mobs.Variaciones[i].Variacion[j].cropAllow[0][k];
						arrayObjeto1.push(ObjetoMeses1);

						ObjetoMeses2 =	VariacionesReact.mobs.Variaciones[i].Variacion[j].grainAllow[0][k];
						arrayObjeto2.push(ObjetoMeses2);

						ObjetoMeses3 =	VariacionesReact.mobs.Variaciones[i].Variacion[j].pastureAllow[0][k];
						arrayObjeto3.push(ObjetoMeses3);

						ObjetoMeses4 =	VariacionesReact.mobs.Variaciones[i].Variacion[j].silageAllow[0][k];
						arrayObjeto4.push(ObjetoMeses4);

						ObjetoMeses5 =	VariacionesReact.mobs.Variaciones[i].Variacion[j].stockAllow[0][k];
						arrayObjeto5.push(ObjetoMeses5);

						/*
							PREPARO WEANING
						*/

						ObjetoWeaningMeses1 =	VariacionesReact.mobs.Variaciones[i].Variacion[j].weaningMobs.cropAllow[0][k];
						arrayWeaningObjeto1.push(ObjetoWeaningMeses1);

						ObjetoWeaningMeses2 =	VariacionesReact.mobs.Variaciones[i].Variacion[j].weaningMobs.grainAllow[0][k];
						arrayWeaningObjeto2.push(ObjetoWeaningMeses2);

						ObjetoWeaningMeses3 =	VariacionesReact.mobs.Variaciones[i].Variacion[j].weaningMobs.pastureAllow[0][k];
						arrayWeaningObjeto3.push(ObjetoWeaningMeses3);

						ObjetoWeaningMeses4 =	VariacionesReact.mobs.Variaciones[i].Variacion[j].weaningMobs.silageAllow[0][k];
						arrayWeaningObjeto4.push(ObjetoWeaningMeses4);

						ObjetoWeaningMeses5 =	VariacionesReact.mobs.Variaciones[i].Variacion[j].weaningMobs.stockAllow[0][k];
						arrayWeaningObjeto5.push(ObjetoWeaningMeses5);
					}

					VariacionesReact.mobs.Variaciones[i].Variacion[j].cropAllow    = arrayObjeto1;
					VariacionesReact.mobs.Variaciones[i].Variacion[j].grainAllow   = arrayObjeto2;
					VariacionesReact.mobs.Variaciones[i].Variacion[j].pastureAllow = arrayObjeto3;
					VariacionesReact.mobs.Variaciones[i].Variacion[j].silageAllow  = arrayObjeto4;
					VariacionesReact.mobs.Variaciones[i].Variacion[j].stockAllow   = arrayObjeto5;

					VariacionesReact.mobs.Variaciones[i].Variacion[j].weaningMobs.cropAllow    = arrayWeaningObjeto1;
					VariacionesReact.mobs.Variaciones[i].Variacion[j].weaningMobs.grainAllow   = arrayWeaningObjeto2;
					VariacionesReact.mobs.Variaciones[i].Variacion[j].weaningMobs.pastureAllow = arrayWeaningObjeto3;
					VariacionesReact.mobs.Variaciones[i].Variacion[j].weaningMobs.silageAllow  = arrayWeaningObjeto4;
					VariacionesReact.mobs.Variaciones[i].Variacion[j].weaningMobs.stockAllow   = arrayWeaningObjeto5;
					//Elimino los atributos de habilitar opcion de carga de weaning
					delete VariacionesReact.mobs.Variaciones[i].Variacion[j].weaningMobs.cropStubbleEnable;
					delete VariacionesReact.mobs.Variaciones[i].Variacion[j].weaningMobs.stockPilledEnable;


				}
			}
			jsonString= JSON.stringify(VariacionesReact.mobs);
			console.log(JSON.stringify(VariacionesReact.mobs));

		}


		if(states.destete.permitido){
			VariacionesReact.destete.variaciones = states.destete.pagvariaciones;
			let ObjetoVariacionDestete = {};
			for(let index = 0; index < VariacionesReact.destete.variaciones.length; index++){
				ObjetoVariacionDestete = {};
				let objetoDestete = {};
				for(let i = 0; i<VariacionesReact.destete.variaciones[index].length;i++){
					objetoDestete = {};
					objetoDestete.habilitarPeso     = VariacionesReact.destete.variaciones[index][i].Destete[1];
					objetoDestete.habilitarCC       = VariacionesReact.destete.variaciones[index][i].Destete[8];
					objetoDestete.umbral            = VariacionesReact.destete.variaciones[index][i].Destete[0];
					objetoDestete.calfDietBProtein  = VariacionesReact.destete.variaciones[index][i].Destete[2];
					objetoDestete.calfDestiny       = VariacionesReact.destete.variaciones[index][i].Destete[3];
					objetoDestete.calfDietIntake    = VariacionesReact.destete.variaciones[index][i].Destete[4];
					objetoDestete.calfDietDigest    = VariacionesReact.destete.variaciones[index][i].Destete[5];
					objetoDestete.calfDietDRProtein = VariacionesReact.destete.variaciones[index][i].Destete[6];
					objetoDestete.umbralBcs         = VariacionesReact.destete.variaciones[index][i].Destete[7];
					VariacionesReact.destete.variaciones[index][i] = objetoDestete;

				}
				ObjetoVariacionDestete.Variacion = VariacionesReact.destete.variaciones[index];
				VariacionesReact.destete.variaciones[index] = ObjetoVariacionDestete;


			}
			jsonString= JSON.stringify(VariacionesReact.destete);

		}

		 VariacionesReact.engorde = states.engorde;
		// jsonString= JSON.stringify(VariacionesReact.engorde);



		jsonString= JSON.stringify(VariacionesReact);		
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