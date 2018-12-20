import React,{Component} from "react";
import ReactDOM from "react-dom";

class ItemScoring extends Component {

	constructor(props){
		super(props);
		this.changeLabel = this.changeLabel.bind(this);
		this.state = {label: ""};
	}
	
	componentDidMount(){
		this.inputSlider.value = 0;
		this.changeLabel();
	}

	changeLabel(){
		var value = this.inputSlider.value;

		const scores = [
			{value: 0 , label: "No Cumple"},
			{value: 1 , label: "Cumple Parcialmente"},
			{value: 2 , label: "Si Cumple"}
		];

		const label = scores.find(score => score.value == value).label;
		if(label !== null){
			this.setState({label: label});
		}
	}

	

	render(){

		// TODO: Query Database to obtain the scoring system

		const step = 1;
		const min  = 0;
		const max  = 2;

		return(
		
			<div className="row h-100">
				<form className="col-10 my-auto mx-auto">
				  	<div className="form-group text-center">
					    <label htmlFor="formControlRange">
					    	{this.state.label}
					    </label>
					    <input 
					    	ref={input => {this.inputSlider = input}}
					    	type="range" step={step} min={min} max={max}
					    	className="form-control-range" id="formControlRange"
					    	onChange={this.changeLabel}>
					    </input>
				  	</div>
				</form>
			</div>

		); // END return

	}
}

export default ItemScoring;