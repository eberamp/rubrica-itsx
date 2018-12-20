import React, {Component} from "react";
import ReactDOM from "react-dom";
import { Route, Link } from "react-router-dom";

import CustomizableButton from "../view/CustomizableButton";
import RubricQuickInfo from "../view/RubricQuickInfo";
import styles from "../../../styles/dashboard.css";
import Button from '@material-ui/core/Button';

class SearchContainer extends Component {

	render(){	
		return(
		
			<div className="row d-flex justify-content-center align-items-center">
				<div className="container w-75">
					<div className="row">

						<div className="input-group mb-3">
						 	<input type="text" className="form-control" 
						 	placeholder="Filtrar por ID, nombre o fecha" 
						  	aria-label="Filtrar Busqueda" />

						  	<div className="input-group-append">
						    	<Button variant="outlined" size="small" color="primary">Filtrar</Button>
						  	</div>
						</div>

					</div>

					<div className="row">
						<div className="col">
							<Link to="/dashboard/create">
								<CustomizableButton 
									className="dashboard-button border shadow-sm"
									iconFont iconStyle="fas fa-plus fa-2x font-color-black"
									height={5} />
							</Link>
						</div>
					</div>
					
					<div className="mb-5">
						<div className="mt-2">
							<RubricQuickInfo
							id="1213" 
							creationDate="12/1/2018"/>
						</div>

						<div className="mt-2">
							<RubricQuickInfo
							id="1" 
							creationDate="12/1/2018"/>
						</div>

						<div className="mt-2">
							<RubricQuickInfo
							id="141" 
							creationDate="12/1/2018"/>
						</div>

						<div className="mt-2">
							<RubricQuickInfo
							id="1123123" 
							creationDate="12/1/2018"/>
						</div>

						<div className="mt-2">
							<RubricQuickInfo
							id="1123123" 
							creationDate="12/1/2018"/>
						</div>

					</div>

				</div>
			</div>

		); // END return
	}
}

export default SearchContainer;