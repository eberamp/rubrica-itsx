import React from "react";
import PropTypes from "prop-types";

const ItemDescription = ({ number , description }) => (
	<div className="row h-100">
		<div className="col-2 my-auto text-center">		{number} 	  </div>
		<div className="col-10 my-auto text-justify" >	{description} </div>
	</div>
);

ItemDescription.propTypes = {
  description:  PropTypes.string.isRequired
};

export default ItemDescription;