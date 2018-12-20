import React, {Component} from "react";
import ReactDOM from "react-dom";
import { Route, Link } from "react-router-dom";
import PropTypes from "prop-types";

import style from "../../../styles/quick-info-item.css";

import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ViewIcon from '@material-ui/icons/Visibility';
import IconButton from '@material-ui/core/IconButton';

const buttonClicked = function(){
	console.log("Click");
}

const RubricQuickInfo = ({ id, name, creationDate, className}) => (
	
	<div className={`row border quick-info-item ${className}`}>

		<div className="col-sm-12 col-md-9 border-right">	
			<div className="pt-2 text-muted">
				<span className="font-weight-bold">ID: </span>{id}
			</div>

			<div className="pb-2">
				<h2 className="text-secondary text-uppercase">{name ? name : "Sin Nombre"}</h2>
			</div>
		</div>

		<div className="col-sm-12 col-md-3">
			<div className="row mt-1 h-50 d-flex align-items-center justify-content-end justify-content-sm-around">
		
				<Button onClick={buttonClicked} variant="contained" size="small" color="primary">
          			Usar Formato
          		</Button>
				
				<Tooltip title="Eliminar" placement="bottom-end">
					<IconButton aria-label="Delete">
			         	<DeleteIcon />
			        </IconButton>
				</Tooltip>
			</div>

			<div className="row justify-content-center">
				<div className="border-top mt-2 text-center text-muted">Creado: {creationDate}</div>
			</div>
		</div>

	</div>
	
); // END Arrow Function

RubricQuickInfo.propTypes = {
	id:  PropTypes.string.isRequired
};

export default RubricQuickInfo;