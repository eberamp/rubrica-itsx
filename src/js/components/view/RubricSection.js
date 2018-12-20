import React, {Component} from "react";

import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Collapse from '@material-ui/core/Collapse';

// Material Icons
import DeleteIcon from '@material-ui/icons/Delete';
import CancelIcon from '@material-ui/icons/Cancel';
import AddIcon from '@material-ui/icons/Add';
import ViewIcon from '@material-ui/icons/Visibility';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';


const key = require('shortid');

// Child Evaluation Item

const label 	  = "Elemento a Evaluar";
const placeholder = "Descripcion del Elemento a Evaluar";

class EvaluationItem extends Component {

	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="row">
				<div className="col-sm-12 col-md-10 border-right">
					<TextField
						label={label}
			          	placeholder={placeholder}
			          	multiline
			          	fullWidth
			          	margin="normal"
			        />
				</div>

				<div className="col-sm-12 col-md-2">					
					<div className="row h-100 d-flex align-items-center justify-content-center">
						<Tooltip title="Eliminar" placement="bottom-end">
							<IconButton aria-label="Eliminar" >
					         	<CancelIcon fontSize="small"/>
					        </IconButton>
						</Tooltip>
					</div>
				</div>
			</div>
		);

	} // END render
	
} // END child EvaluationItem


class RubricSection extends Component {

	// Life cycle functions

	constructor(props){
		super(props);

		this.state = {
			evaluationItems: [],
			itemsHidden: false,
		}

		this.removeSelf		   = this.removeSelf.bind(this);
		this.addEvaluationItem = this.addEvaluationItem.bind(this);
		this.handleHideItems   = this.handleHideItems.bind(this);
	};

	componentDidMount(){

	};

	// Logic functions

	handleHideItems(){
		const state = this.state.itemsHidden;
		this.setState({itemsHidden: !state});
	};s

	addEvaluationItem(){
		const evalItems = this.state.evaluationItems;
		const itemsHidden = this.state.itemsHidden

		const newSection = ({
			id: key.generate(),
			isVisible: true
        });

        evalItems.push(newSection);
		this.setState({ evaluationItems: evalItems });

		if(!itemsHidden){this.handleHideItems();}
	}

	removeSelf(){
		this.props.onRemove(this.props.id);
	}


	render(){
		return(
			
			<div>
				<div className={`row border shadow-sm ${this.props.className}`}>

					<div className="col-sm-12 col-md-9">
						<TextField
							className="mb-3 display-3"
							label="Nombre de la Seccion"
							fullWidth
							margin="normal"
							variant="outlined"
				        />
					</div>

					<div className="col-sm-12 col-md-3">
								
						<div className="row h-100 d-flex align-items-center justify-content-end justify-content-sm-around">
							<Tooltip title="Visualizar" placement="bottom-end">
								<IconButton aria-label="Visualizar">
						         	<ViewIcon />
						        </IconButton>
							</Tooltip>

							<Tooltip title="Agregar Elemento a Evaluar" placement="bottom-end">
								<IconButton onClick={this.addEvaluationItem} aria-label="Agregar Elemento a Evaluar">
						         	<AddIcon />
						        </IconButton>
							</Tooltip>

							<Tooltip title="Ocultar Elementos" placement="bottom-end">
								<IconButton onClick={this.handleHideItems} aria-label="Visualizar">
						         	{
						         		this.state.itemsHidden ?
						         		<ArrowDropUp />
						         		:
						         		<ArrowDropDown />
						         		
						         	}
						        </IconButton>
							</Tooltip>

							<Tooltip title="Eliminar" placement="bottom-end">
								<IconButton onClick={this.removeSelf} aria-label="Eliminar">
						         	<DeleteIcon />
						        </IconButton>
							</Tooltip>
						</div>

					</div>
				</div>

				<Collapse in={this.state.itemsHidden} className="container">
					{this.state.evaluationItems.map(item =>
						<EvaluationItem key={item.id} id={item.id}/>
					)}
				</Collapse>

			</div>
		);
	}
}

export default RubricSection;