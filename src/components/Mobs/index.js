import React, { Component } from 'react';
import PropTypes from 'prop-types';

//components 
import MobContent from './mobContent';

class Mobs extends Component {

	/*static propTypes = {
      selectOptions: PropTypes.array.isrequired
  };*/



	render(){

		    //const { selectOptions } =  this.props;

		var Data     = ['Mob 1', 'Mob 2', 'Mob 3', 'Mob 4'], //esta lista se debe cargar con el store de Redux.
            MakeItem = function(X) {
                return <option>{X}</option>;
            };


		return(
			<div>
				<h1>Configuraciones de los mobs </h1>
				<p>Seleccione un Mob:
					<select>{
				 			Data.map(function(object, i){
	               				return <option key={i}> {object} </option> ;
	               						}
	               				)
					   	}
				 	</select>
				</p>
				<MobContent/>
			</div>
		);
	}
}

export default Mobs;