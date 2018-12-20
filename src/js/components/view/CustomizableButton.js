import React from "react";
import PropTypes from "prop-types";

const CustomizableButton = ({ title, width , height, image, imageWidth, className, symetric, iconFont, iconStyle}) => (
	
	<div
	className={`row ${className}`}
	style={

		symetric ? 
		{width: width + 'em', height: width + 'em'}
		: 
		{width: width + 'em', height: height + 'em'}

	}>

	<div className="col align-self-center text-center">	
		<div>
			{iconFont ?
				<i className={iconStyle}></i>
				:
				<img className="img-fluid p-1" src={image} style={
					imageWidth ?
					{width: imageWidth + 'em'}
					:
					{width: width/3 + 'em'}
				}/>
			}
		</div>

		{title}
		
	</div>

		

	</div>
	
); // END Arrow Function

export default CustomizableButton;