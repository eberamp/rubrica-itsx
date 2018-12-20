import React from "react";
import PropTypes from "prop-types";

const Title = ({ text }) => (
	<div className="display-2 mx-auto">
		{text}
	</div>
);

Title.propTypes = {
  text:  PropTypes.string.isRequired
};

export default Title;