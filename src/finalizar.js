import store from './index.js';
import {xmlString} from './data/simulacioninicial.js';
import $ from 'jquery';

//Config Store

function getMonth(numeroMes){
  switch(numeroMes){
    case 0:
        return "January";
        break;
    case 1:
        return "February";
        break;
    case 2:
        return "March";
        break;
    case 3:
        return "April";
        break;
    case 4:
        return "May";
        break;
    case 5:
        return "June";
        break;
    case 6:
        return "July";
        break;
    case 7:
        return "August";
        break;
    case 8:
        return "September";
        break;
    case 9:
        return "October";
        break;
    case 10:
        return "November";
        break;
    case 11:
        return "December";
        break;
  }
}

function validarCargaDatos(states){
	// for (let prop in states) {
 //        // skip loop if the property is from prototype
 //        if((states[prop].permitido ==true) && (states[prop].cantVariaciones == 0)){
 //        	console.log("asd");
 //        	return false;
 //        }

       
 //    }
    return true;
}
export function generarSalidaRest(){
	//Clonamos el objeto inicial
	let states = JSON.parse(JSON.stringify(store.getState()));

	if(validarCargaDatos(states)){
		let jsonString = null;
		let VariacionesReact = {};
		let ObjetoPastura = {};
		VariacionesReact.ensilaje = {};
		VariacionesReact.recursosforrajeros={};
		VariacionesReact.potreros={};
		VariacionesReact.rastrojos={};
		VariacionesReact.invernada={};
		VariacionesReact.feedlot={};
		VariacionesReact.diferido = {};
		VariacionesReact.destete = {};
		VariacionesReact.mobs = {};

		/* 
		           GENERO ENSILAJE 
		*/
		if(states.ensilaje.permitido && states.ensilaje.cantVariaciones > 0){
			VariacionesReact.ensilaje.leftoverMass = states.ensilaje.leftoverVariaciones;
			VariacionesReact.ensilaje.triggerMass = states.ensilaje.triggerVariaciones;
			let jsonString= JSON.stringify(VariacionesReact.ensilaje);
		}

		/* 
		           GENERO RECURSOSFORRAJEROS 
		*/
		if(states.recursosforrajeros.permitido && states.recursosforrajeros.cantVariaciones > 0){
			VariacionesReact.recursosforrajeros.ForrajeroPasturas = states.recursosforrajeros.pagvariaciones;
			let ForrajeroPastura = {};
			let ForrajeroVariacion = {};
			for(let i = 0; i < VariacionesReact.recursosforrajeros.ForrajeroPasturas.length; i++){
				ForrajeroVariacion = {};
				ForrajeroPastura.ForrajeroVariacion = VariacionesReact.recursosforrajeros.ForrajeroPasturas[i];
				VariacionesReact.recursosforrajeros.ForrajeroPasturas[i] = ForrajeroPastura;		
				
				let ValorMes = {}
				let ArrayForrajero = [];
				for(let j = 0; j < VariacionesReact.recursosforrajeros.ForrajeroPasturas[i].ForrajeroVariacion.length; j++){
					ArrayForrajero = [];
					for(let k = 0; k < 12; k++){
						ValorMes = {};
						ValorMes = VariacionesReact.recursosforrajeros.ForrajeroPasturas[i].ForrajeroVariacion[j][k];
						delete ValorMes.mes;
						ArrayForrajero.push(ValorMes);					
					}
					VariacionesReact.recursosforrajeros.ForrajeroPasturas[i].ForrajeroVariacion[j] = ArrayForrajero;
					
				}
				
			}
			jsonString= JSON.stringify(VariacionesReact.recursosforrajeros);
		}
		

		/* 
		           GENERO LOS POTREROS 
		*/
		if(states.potreros.permitido && states.potreros.cantVariaciones > 0){
			VariacionesReact.potreros.pasturas = states.potreros.digestibilidadVariaciones;
			
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
		if(states.rastrojos.permitido && states.rastrojos.cantVariaciones > 0){
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
		if(states.diferidos.permitido && states.diferidos.cantVariaciones > 0){
			VariacionesReact.diferido.digestibilidadVariaciones = states.diferidos.digestibilidadVariaciones;
			VariacionesReact.diferido.rindeVariaciones = states.diferidos.rindeVariaciones;
			for(let i = 0; i< VariacionesReact.diferido.digestibilidadVariaciones.length; i++ ){
				ObjetoPastura = {}
				ObjetoPastura.pastura = VariacionesReact.diferido.digestibilidadVariaciones[i];
				VariacionesReact.diferido.digestibilidadVariaciones[i] = ObjetoPastura;
				ObjetoPastura.pastura = VariacionesReact.diferido.rindeVariaciones[i];
				VariacionesReact.diferido.rindeVariaciones[i] = ObjetoPastura;
			}

			jsonString= JSON.stringify(VariacionesReact.diferido);
		}

		/*
			GENERO INVERNADA
		*/
		if(states.invernada.permitido && states.invernada.cantVariaciones > 0){
			VariacionesReact.invernada.VaquillonaVariaciones = states.invernada.VaquillonaVariaciones;
			VariacionesReact.invernada.nobillosVariaciones  = states.invernada.nobillosVariaciones;
			jsonString= JSON.stringify(VariacionesReact.invernada);
		}

		/*
			GENERO LOS FEEDLOT
		*/
		if(states.feedlot.permitido && states.ensilaje.cantVariaciones > 0){
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
		if(states.mobs.permitido && states.mobs.cantVariaciones > 0){
			VariacionesReact.mobs.Variaciones = states.mobs.arrayMobs;
			let ObjetoVariacion = {};
			for(let i = 0; i < VariacionesReact.mobs.Variaciones.length; i++){
				ObjetoVariacion = {};
				ObjetoVariacion.Variacion = VariacionesReact.mobs.Variaciones[i].pagvariaciones;
				VariacionesReact.mobs.Variaciones[i] = ObjetoVariacion;

				for(let j = 0; j < VariacionesReact.mobs.Variaciones[i].Variacion.length; j++){
					let arrayObjeto1 = []; let arrayObjeto2 = []; let arrayObjeto3 = []; let arrayObjeto4 = []; let arrayObjeto5 = [];
					let arrayWeaningObjeto1 = []; let arrayWeaningObjeto2 = []; let arrayWeaningObjeto3 = []; let arrayWeaningObjeto4 = []; let arrayWeaningObjeto5 = [];
					let diferidosEnable = states.mobs.arrayMobs[i].Variacion[j].weaningMobs.stockPilledEnable;
					let rastrojoEnable = states.mobs.arrayMobs[i].Variacion[j].weaningMobs.cropStubbleEnable;
					for(let k = 0; k < 12; k++){
						let ObjetoMeses1 = {}; let ObjetoMeses2 = {}; let ObjetoMeses3 = {}; let ObjetoMeses4 = {};	let ObjetoMeses5 = {};

						let ObjetoWeaningMeses1 = {}; let ObjetoWeaningMeses2 = {};	let ObjetoWeaningMeses3 = {}; let ObjetoWeaningMeses4 = {};	let ObjetoWeaningMeses5 = {};

						ObjetoMeses1 =	VariacionesReact.mobs.Variaciones[i].Variacion[j].cropAllow[0][k];
						delete ObjetoMeses1.mes;
						arrayObjeto1.push(ObjetoMeses1);

						ObjetoMeses2 =	VariacionesReact.mobs.Variaciones[i].Variacion[j].grainAllow[0][k];
						delete ObjetoMeses2.mes;
						arrayObjeto2.push(ObjetoMeses2);

						ObjetoMeses3 =	VariacionesReact.mobs.Variaciones[i].Variacion[j].pastureAllow[0][k];
						delete ObjetoMeses3.mes;
						arrayObjeto3.push(ObjetoMeses3);

						ObjetoMeses4 =	VariacionesReact.mobs.Variaciones[i].Variacion[j].silageAllow[0][k];
						delete ObjetoMeses4.mes;
						arrayObjeto4.push(ObjetoMeses4);

						ObjetoMeses5 =	VariacionesReact.mobs.Variaciones[i].Variacion[j].stockAllow[0][k];
						delete ObjetoMeses5.mes;
						arrayObjeto5.push(ObjetoMeses5);



						/*
							PREPARO WEANING
						*/

						ObjetoWeaningMeses1 =	VariacionesReact.mobs.Variaciones[i].Variacion[j].weaningMobs.cropAllow[0][k];
						delete ObjetoWeaningMeses1.mes;
						arrayWeaningObjeto1.push(ObjetoWeaningMeses1);

						ObjetoWeaningMeses2 =	VariacionesReact.mobs.Variaciones[i].Variacion[j].weaningMobs.grainAllow[0][k];
						delete ObjetoWeaningMeses2.mes;
						arrayWeaningObjeto2.push(ObjetoWeaningMeses2);

						ObjetoWeaningMeses3 =	VariacionesReact.mobs.Variaciones[i].Variacion[j].weaningMobs.pastureAllow[0][k];
						delete ObjetoWeaningMeses3.mes;
						arrayWeaningObjeto3.push(ObjetoWeaningMeses3);

						ObjetoWeaningMeses4 =	VariacionesReact.mobs.Variaciones[i].Variacion[j].weaningMobs.silageAllow[0][k];
						delete ObjetoWeaningMeses4.mes;
						arrayWeaningObjeto4.push(ObjetoWeaningMeses4);

						ObjetoWeaningMeses5 =	VariacionesReact.mobs.Variaciones[i].Variacion[j].weaningMobs.stockAllow[0][k];
						delete ObjetoWeaningMeses5.mes;
						arrayWeaningObjeto5.push(ObjetoWeaningMeses5);
					}
					//console.log(VariacionesReact.mobs);
					VariacionesReact.mobs.Variaciones[i].Variacion[j].cropAllow    = arrayObjeto1;
					VariacionesReact.mobs.Variaciones[i].Variacion[j].grainAllow   = arrayObjeto2;
					VariacionesReact.mobs.Variaciones[i].Variacion[j].pastureAllow = arrayObjeto3;
					VariacionesReact.mobs.Variaciones[i].Variacion[j].silageAllow  = arrayObjeto4;
					VariacionesReact.mobs.Variaciones[i].Variacion[j].stockAllow   = arrayObjeto5;
					VariacionesReact.mobs.Variaciones[i].Variacion[j].weaningMobs.diferidosEnable = diferidosEnable;
					VariacionesReact.mobs.Variaciones[i].Variacion[j].weaningMobs.rastrojoEnable = rastrojoEnable;
					console.log(VariacionesReact.mobs);
					// VariacionesReact.mobs.Variaciones[i].Variacion[j].weaningMobs.diferidosEnable = states.mobs.arrayMobs[i].pagvariaciones[j].weaningMobs.stockPilledEnable;
					// VariacionesReact.mobs.Variaciones[i].Variacion[j].weaningMobs.rastrojoEnable = states.mobs.arrayMobs[i].pagvariaciones[j].weaningMobs.cropStubbleEnable;
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


		if(states.destete.permitido && states.destete.cantVariaciones > 0){
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
		//----------------------------------------Engorde-----------------------------------
		 //VariacionesReact.engorde = states.engorde;
		 VariacionesReact.engorde = {};
		// jsonString= JSON.stringify(VariacionesReact.engorde);
		if(states.engorde.permitido && states.engorde.cantVariaciones > 0){

			let ObjetoVariacionEngorde = [];
			ObjetoVariacionEngorde = states.engorde.pagVariaciones;

			console.log(ObjetoVariacionEngorde);

/*			ObjetoVariacionEngorde.PastoEngorde = {};
			ObjetoVariacionEngorde.VariacionEngorde = {};
			ObjetoVariacionEngorde.PastoEngorde.pastureAllow     = states.engorde.arrayPastures;
			ObjetoVariacionEngorde.PastoEngorde.grainAllow       = states.engorde.arrayGrain;
			ObjetoVariacionEngorde.PastoEngorde.silageAllow      = states.engorde.arraySilage;
			ObjetoVariacionEngorde.PastoEngorde.stockPilledAllow = states.engorde.arrayStockPilled;
			ObjetoVariacionEngorde.PastoEngorde.cropStubbleAllow = states.engorde.arrayCropStubble;

				for(let i = 0; i< states.engorde.arrayPastures.length; i++){
					let arrayObjeto6 = []; let arrayObjeto7 = []; let arrayObjeto8 = []; let arrayObjeto9 = []; let arrayObjeto10 = [];
					for(let j = 0; j < 12; j++){
						let ObjetoMes6 = {}; let ObjetoMes7 = {}; let ObjetoMes8 = {}; let ObjetoMes9 = {};	let ObjetoMes10 = {};
						let mes = getMonth(j);
						ObjetoMes6.valor = ObjetoVariacionEngorde.PastoEngorde.pastureAllow[i][j];
						//ObjetoMes6.mes   = mes;
						arrayObjeto6.push(ObjetoMes6);
						
						ObjetoMes7.valor = ObjetoVariacionEngorde.PastoEngorde.grainAllow[i][j];
						//ObjetoMes7.mes   = mes;
						arrayObjeto7.push(ObjetoMes7);
						

						ObjetoMes8.valor = ObjetoVariacionEngorde.PastoEngorde.silageAllow[i][j];
						//ObjetoMes8.mes   = mes;
						arrayObjeto8.push(ObjetoMes8);
						

						ObjetoMes9.valor = ObjetoVariacionEngorde.PastoEngorde.stockPilledAllow[i][j];
						//ObjetoMes9.mes   = mes;
						arrayObjeto9.push(ObjetoMes9);
						

						ObjetoMes10.valor = ObjetoVariacionEngorde.PastoEngorde.cropStubbleAllow[i][j];
						//ObjetoMes10.mes   = mes;
						arrayObjeto10.push(ObjetoMes10);
						
					}

					ObjetoVariacionEngorde.PastoEngorde.pastureAllow[i]     = arrayObjeto6 
					ObjetoVariacionEngorde.PastoEngorde.grainAllow[i]       = arrayObjeto7
					ObjetoVariacionEngorde.PastoEngorde.silageAllow[i]      = arrayObjeto8
					ObjetoVariacionEngorde.PastoEngorde.stockPilledAllow[i] = arrayObjeto9
					ObjetoVariacionEngorde.PastoEngorde.cropStubbleAllow[i] = arrayObjeto10
			}
				ObjetoVariacionEngorde.VariacionEngorde.arrayCC           = states.engorde.arrayCC;
				ObjetoVariacionEngorde.VariacionEngorde.arrayDRProtein    = states.engorde.arrayDRProtein;
				ObjetoVariacionEngorde.VariacionEngorde.arrayDigest       = states.engorde.arrayDigest;
				ObjetoVariacionEngorde.VariacionEngorde.arrayIntake       = states.engorde.arrayIntake;
				ObjetoVariacionEngorde.VariacionEngorde.arrayPesoVivo     = states.engorde.arrayPesoVivo;
				ObjetoVariacionEngorde.VariacionEngorde.arrayProtein      = states.engorde.arrayProtein;
				*/	
		    VariacionesReact.engorde.Variaciones = ObjetoVariacionEngorde;
		    console.log(JSON.stringify( VariacionesReact.engorde));
			jsonString= JSON.stringify( VariacionesReact.engorde);

		}
		VariacionesReact.xmloriginal = xmlString();
		//console.log(xmlString());
		jsonString= JSON.stringify(VariacionesReact);	
		console.log(jsonString)
		//Llamado al rest
		let Url = "http://localhost:8080/simugan/create"

		$.ajax({
            url: Url,
            type: 'POST',
            dataType: 'json',    
            data: jsonString,
            contentType: 'application/json',
            xhrFields: {
		        withCredentials: false
		    },
            success: function (data) {
                console.log(data);
            },
            error: function (data) {
            	console.log(data);
             	console.log('Error');
            }
        });

	}else{
		console.log("Error de validacion de datos, verifique");
	}

}