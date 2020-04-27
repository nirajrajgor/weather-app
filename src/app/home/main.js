import React from 'react';
import mumbai from "../../assets/images/mumbai.jpg";
import degreeSymbol from "../../assets/images/degree-symbol.png";

const Main = props => {
	return (
		<div className="main-wrapper">
			<img src={mumbai} alt="mumbai location" />
			<div className="info-wrapper">
				<h2>17<img src={degreeSymbol} alt="degree symbol" /></h2>
				<div className="city-info">
					<h1><strong>Mumbai</strong>, Maharashtra</h1>
					<h3>Monday, 28 April 2020</h3>
				</div>
			</div>
		</div>
	);
};
// Main.propTypes = {
// 	getPosts: PropTypes.func
// };
export default Main;