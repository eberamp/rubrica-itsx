import React, {Component} from "react";
import { Route, Link } from "react-router-dom";

import RubricQuickInfo from "../view/RubricQuickInfo";
import Section from "../view/RubricSection";

import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ViewIcon from '@material-ui/icons/Visibility';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';

const key = require('shortid');

// Styles

const floatingFabStyle =  {
    position: 'fixed',
    bottom: 15,
    left: '75%',
}

const sticky = {
	position: 'fixed',
	top: 10,
	right: 0,
	justifySelf: 'flex-start'
}

// Main Class

class CreateContainer extends Component {

	constructor(){
		super();

		this.state = {
			title: "Formato sin Nombre", 
			sections: []
		};

		this.addSection 	= this.addSection.bind(this);
		this.removeSection 	= this.removeSection.bind(this);
	}

	componentDidMount(){

	}

	handleChange = title => event => {
		this.setState({
			[title]: event.target.value,
	    });
	};


	addSection(){
		const sections = this.state.sections;

		const newSection = ({
			id: key.generate(),
			isVisible: true
        });

		sections.push(newSection);

		this.setState({ sections: sections });

	}

	removeSection(id){

		const { sections } = this.state;

		let index = 0;
		sections.forEach(section => {
			if(section.id === id){
				sections.splice(index, 1);
			} index++;
		});

		this.setState({sections: sections});

	}

	render(){	

		return(
		
			<div className="d-flex justify-content-center align-items-center shadow pt-5 pb-5">
				
				<div className="container w-75 h-75">

					<form noValidate autoComplete="off" className="mt-5">
				        <TextField
				          className="w-100 mb-4"
				          label="Nombre de Formato"
				          onChange={this.handleChange('title')}
				          margin="normal"
				          variant="outlined"
				        />
				    </form>

					<div className="row mb-4">

						<div className="col-12 d-flex justify-content-end">
							<div>
								<Fab color="primary" aria-label="Add" className="mr-2 mb-1">
							    	<SaveIcon />
							    </Fab>
								<Fab onClick={this.addSection} variant="extended" className="mb-1">
									Agregar Seccion
									<AddIcon></AddIcon>
								</Fab>
							</div>
						</div>
						
					</div>
					
					<div className="mb-5">

						{this.state.sections.map((section) =>
							section.isVisible ?
							<Section 
								key={section.id} 
								id={section.id} 
								onRemove={this.removeSection} 
								className="mt-4"/>
							:
							"No lo es"
						)}

					</div>
				</div>
				
				<div style={sticky} className="">
					<div className="col-12">
						<Fab color="primary" aria-label="Add" className="mr-2 mb-1">
					    	<SaveIcon />
					    </Fab>
				    </div>
					<div className="col-12">
						<Fab onClick={this.addSection} className="mb-1">
							<AddIcon />
						</Fab>
					</div>
				</div>

			</div>

		); // END return
	} // END render
} // END main class

export default CreateContainer;