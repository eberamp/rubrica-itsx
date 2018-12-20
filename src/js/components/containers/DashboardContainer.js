import React, {Component} from "react";
import ReactDOM from "react-dom";
import CustomizableButton from "../view/CustomizableButton";
import RubricContainer from "./RubricContainer";

import { Route, Link, Switch } from "react-router-dom";

import Button from "@material-ui/core/Button";

class DashboardContainer extends Component {
	render(){	

		const itemWidth = 6;
		const itemHeight = 15;

		return(
		
			<div className="h-100 row d-flex">

				<div className="container w-75 my-auto">
					<h1>Rubrica Dashboard</h1>
					<div className="row">

						<div className="input-group mb-3">
						 	<input type="text" className="form-control" 
						 	placeholder="Busqueda rapida por ID, nombre o fecha" 
						  	aria-label="Busqueda rapida" 
						  	aria-describedby="basic-addon2" />

						  	<div className="input-group-append">
						    	<Button variant="contained" size="small" color="primary">Buscar</Button>
						  	</div>
						</div>

					</div>

					<div className="row mt-5">
						<div className="col d-flex justify-content-center align-items-center mb-1">
							<Link to={`${this.props.match.url}/search`}>
								<CustomizableButton 
								className="dashboard-button border"
								title="Buscar" 
								iconFont iconStyle="fas fa-search fa-2x font-color-black"
								symetric width={itemWidth} />
							</Link>
						</div>

						<div className="col d-flex justify-content-center align-items-center mb-1">
							<Link to={`${this.props.match.url}/post`}>
								<CustomizableButton 
								className="dashboard-button border"
								title="Publicar" 
								iconFont iconStyle="fas fa-share fa-2x font-color-black"
								symetric width={itemWidth} />
							</Link>
						</div>

						<div className="col d-flex justify-content-center align-items-center mb-1">
							<Link to={`${this.props.match.url}/create`}>
								<CustomizableButton 
								className="dashboard-button border"
								title="Crear" 
								iconFont iconStyle="fas fa-plus fa-2x font-color-black"
								symetric width={itemWidth} />
							</Link>
						</div>

						<div className="col d-flex justify-content-center align-items-center mb-1">
							<Link to={`${this.props.match.url}/edit`}>
								<CustomizableButton 
								className="dashboard-button border"
								title="Editar" 
								iconFont iconStyle="fas fa-edit fa-2x font-color-black"
								symetric width={itemWidth} />
							</Link>
						</div>

						<div className="col d-flex justify-content-center align-items-center mb-1">
							<Link to={`${this.props.match.url}/scores`}>
								<CustomizableButton 
								className="dashboard-button border"
								title="Puntajes" 
								iconFont iconStyle="fas fa-arrows-alt-h fa-2x font-color-black"
								symetric width={itemWidth} />
							</Link>
						</div>

						<div className="col d-flex justify-content-center align-items-center">
							<Link to={`${this.props.match.url}/logout`}>
								<CustomizableButton 
								className="dashboard-button border"
								title="Salir" 
								iconFont iconStyle="fas fa-sign-out-alt fa-2x font-color-black"
								symetric width={itemWidth} />
							</Link>
						</div>
					
					</div>
				</div>
				
				

			</div>

		); // END return
	}
}

export default DashboardContainer;