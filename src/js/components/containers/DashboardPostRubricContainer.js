import React, {Component} from "react";
import ReactDOM from "react-dom";
import { Route, Link } from "react-router-dom";

import CustomizableButton from "../view/CustomizableButton";
import RubricQuickInfo from "../view/RubricQuickInfo";
import Button from '@material-ui/core/Button';
import PostRubricQuickInfo from "../view/PostRubricQuickInfo";

class DashboardPostRubricContainer extends Component {

	render(){

	return(
		
			<div className="row d-flex h-100 justify-content-center align-items-center">
				<div className="container w-75 h-75">
					<div className="row">

						<div class="input-group mb-3">
						 	<input type="text" className="form-control" 
						 	placeholder="Filtrar formatos por ID, nombre o fecha de creacion" 
						  	aria-label="Filtrar Busqueda" 
						  	aria-describedby="basic-addon2" />

						  	<div class="input-group-append">
						    	<Button variant="outlined" size="small" color="primary">Filtrar</Button>
						  	</div>
						</div>

					</div>

					<div className="row">
						<div className="col">
						<Link to="/">
							<CustomizableButton 
								className="dashboard-button border shadow-sm"
								iconFont iconStyle="fas fa-plus fa-2x font-color-black"
								height={5} />
						</Link>
						</div>
					</div>
					
					<div className="mb-5">
						<div className="mt-2">
							<PostRubricQuickInfo
							id="1213" 
							name="Nombre del Formato"
							creationDate="12/1/2018"/>
						</div>

						<div className="mt-2">
							<PostRubricQuickInfo
							id="1213" 
							name="Rubrica de Evaluacion Docente"
							creationDate="12/1/2018"/>
						</div>

						<div className="mt-2">
							<PostRubricQuickInfo
							id="1213" 
							name="Formato de Rubrica de Evaluacion con Nombre Muy Largo de 70 caracteres"
							creationDate="12/1/2018"/>
						</div>

						<div className="mt-2">
							<PostRubricQuickInfo
							id="1213" 
							name="Nombre Corto"
							creationDate="12/1/2018"/>
						</div>

						<div className="mt-2">
							<PostRubricQuickInfo
							id="1213"
							creationDate="12/1/2018"/>
						</div>

					</div>

				</div>
			</div>

		); // END return
	}
}

export default DashboardPostRubricContainer;