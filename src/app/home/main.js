import React from 'react';
import mumbai from "../../assets/images/mumbai.jpg";
import degreeSymbol from "../../assets/images/degree-symbol.png";

const Main = props => {
	return (
		<div className="main-wrapper">
			{
				props.photo ?
					<img src={props.photo.urls.regular} alt={props.photo.alt_description} />
					:
					<img src={mumbai} alt={"Default mumbai location"} />
			}
			<div className="info-wrapper">
				<h2>
					{props.weather && Math.round(props.weather.temp)}
					<img src={degreeSymbol} alt="degree symbol" />
				</h2>
				<div className="city-info">
					<h1><strong>{props.cityName}</strong></h1>
					<h3>{new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h3>
				</div>
			</div>
		</div>
	);
};
// Main.propTypes = {
// 	getPosts: PropTypes.func
// };
export default Main;