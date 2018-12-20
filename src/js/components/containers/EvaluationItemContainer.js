import React, {Component} from "react";
import ReactDOM from "react-dom";
import ItemDescription from "../view/ItemDescription";
import ItemScoring from "../view/ItemScoring";
import ItemSuggestions from "../view/ItemSuggestions";


class EvaluationItemContainer extends Component {
	render(){

		// An item object is a row (evaluationItem) and contains the number, description etc
		const {item, number} = this.props;

		return(

			<div className="row">

				<div className="col-sm-12 col-md-4">
					<ItemDescription number={number} description={item.description}/>
				</div>

				<div className="col-sm-12 col-md-4">
					<ItemScoring />
				</div>

				<div className="col-sm-12 col-md-4">
					<ItemSuggestions />
				</div>

			</div>

		); // END return

	}
}

export default EvaluationItemContainer;