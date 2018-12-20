import React, {Component} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NavbarContainer extends Component {
	constructor(){
		super();
	}

	render(){

		const loggedIn = false;

		return(
			<Router>
				<div>
					<nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
						<div className="container">
							<a className="navbar-brand" href="#">Rubric Name</a>

						  	<button 
						  	className="navbar-toggler" 
						  	type="button" 
						  	data-toggle="collapse" 
						  	data-target="#navbarSupportedContent" 
						  	aria-controls="navbarSupportedContent" 
						  	aria-expanded="false" 
						  	aria-label="Toggle navigation">

						    	<span className="navbar-toggler-icon"></span>

						  	</button>

						  	<div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
							 	<div className="">
								    

									{loggedIn ? 
										// TODO: Get user info and render acordingly
										<ul className="navbar-nav">

											<li className="nav-item">
												<Link to="/cuenta" className="nav-link">Cuenta</Link>
											</li>
											<li className="nav-item dropdown">
										        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										          Navegar Secciones
										        </a>
										        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
													<a className="dropdown-item" href="#">Portada</a>
													<div className="dropdown-divider"></div>
													<a className="dropdown-item" href="#">Another action</a>
													<div className="dropdown-divider"></div>
													<a className="dropdown-item" href="#">Something else here</a>
										        </div>
								      		</li>
								      		
								      	</ul>

							      		: 

							      		<span className="text-muted">No ha iniciado sesion</span>
							      	}

								    
							  	</div>
							</div>
						</div>
					</nav>
		
				</div>
			</Router>
		); // END return
	}
}

export default NavbarContainer;
