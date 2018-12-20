import React, {Component} from "react";
import ReactDOM from "react-dom";

import Title from "../view/Title";
import EvaluationItemContainer from "./EvaluationItemContainer";
import Button from '@material-ui/core/Button';
import NavbarContainer from "./NavbarContainer";

class RubricContainer extends Component {

	constructor(props){
		super(props);
	}

	componentDidMount(){
	}

	render(){	
		// TODO Query Database
		// TODO How to change the state from another component
	
		const section = {
			title: "Portada",
			evaluationItems: [{ 

				
				id: 1,
				description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, dolorum ipsam, nisi neque eum doloribus facere, aperiam provident odit quidem aut sint minima illo aliquid porro assumenda? Dolore, officia, magni?"

			}, 
			{ 
				id: 2, 
				description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, dolorum ipsam, nisi neque eum doloribus facere, aperiam provident odit quidem aut sint minima illo aliquid porro assumenda? Dolore, officia, magni?"

			}, 
			{ 
				id: 3, 
				description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, dolorum ipsam, nisi neque eum doloribus facere, aperiam provident odit quidem aut sint minima illo aliquid porro assumenda? Dolore, officia, magni?"

			}, 
			{ 
				id: 4, 
				description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, dolorum ipsam, nisi neque eum doloribus facere, aperiam provident odit quidem aut sint minima illo aliquid porro assumenda? Dolore, officia, magni?"

			}]


		}

		return(
			
			<div className="w-100">
				<NavbarContainer></NavbarContainer>

				<div className="container">
					<h5>The id is {this.props.match.params.id}</h5>
					
					<div className="text-center mb-5">
						<h1 className="display-4">{section.title}</h1>
					</div>

					<div className="row">
						{section.evaluationItems.map((item , i) => (
							<EvaluationItemContainer item={item} key={item.id} number={i+1} />
						))}
					</div>

					<div className="row justify-content-end pt-5">

						<Button variant="contained">Guardar Seccion</Button>
						<Button variant="contained" color="primary" className="ml-2">Continuar</Button>
					</div>

				</div>
			</div>
			

		) // END return
	}
}

export default RubricContainer;

