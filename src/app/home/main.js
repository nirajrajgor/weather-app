import React from 'react';
import mumbai from "../../assets/images/mumbai.jpg"
const Main = props => {
	return (
		<div className="main-wrapper">
			<img src={mumbai} alt="mumbai image" />
			<div className="info-wrapper">
				<h2>17º</h2>
				<div className="city-info">
					<h1><b>Mumbai</b>, Maharashtra</h1>
					<h3></h3>
				</div>
			</div>
		</div>
	);
};
// Main.propTypes = {
// 	getPosts: PropTypes.func
// };
export default Main;