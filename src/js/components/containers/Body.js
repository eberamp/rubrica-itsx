import React, {Component} from "react";
import ReactDOM from "react-dom";

import Title from "../view/Title";
import RubricContainer from "./RubricContainer";
import SearchContainer from "./SearchContainer";
import CreateContainer from "./CreateContainer";
import DashboardContainer from "./DashboardContainer";
import DashboardPostRubricContainer from "./DashboardPostRubricContainer";

import { Route, Link, Switch } from "react-router-dom";

const Index = () => {
	return (
		<div className="row h-100 d-flex justify-content-center align-items-center">
			<div className="text-center">
				<h1 className="display-3">Index</h1>

				<div className="row w-100 justify-content-center">
					<Link className="h3" to="/dashboard">> Go to Dashboard</Link>
					<Link className="h3" to="/rubric/123">> Rubric Example id: 123</Link>
				</div>
			</div>
		</div>
	);
}

class Body extends Component {

	render(){

		return(

			<div className="h-100 container">

				<Switch>

					<Route
						path="/dashboard/search"
						component={SearchContainer}>
					</Route>

					<Route
						path="/dashboard/post"
						component={DashboardPostRubricContainer}>
					</Route>

					<Route
						path="/dashboard/create"
						component={CreateContainer}>
					</Route>

					<Route
						path="/dashboard/edit"
						component={SearchContainer}>
					</Route>

					<Route
						exact path="/dashboard"
						component={DashboardContainer}>
					</Route>

					<Route 
						path="/rubric/:id"
						component={RubricContainer}>
					</Route>

					<Route 
						path="/preview/:id"
						component={RubricContainer}>
					</Route>

					<Route
						component={Index}>
					</Route>

				</Switch>

			</div>
		) // END return
	}
}

export default Body;