import React,{Component} from "react";
import ReactDOM from "react-dom";

class ItemSuggestions extends Component {
	render(){

		return(

			<div className="form-group">
				<label htmlFor="comment">Recomendacion:</label>
			  	<textarea className="form-control" rows="3" id="reco"></textarea>
			</div> 

		) // END return

	}
}

export default ItemSuggestions;