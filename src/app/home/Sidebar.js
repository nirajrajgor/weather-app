import React from 'react';
import mumbai from "../../assets/images/mumbai.jpg";

const Sidebar = props => {
	return (
		<>
			<div className="search-wrapper">
				<input type="text" placeholder="Search" />
			</div>
			<div className="info-card">
				<h3>Weather Details</h3>
				<div className="item">
					<h4>Cloudy</h4>
					<h5>68%</h5>
				</div>
				<div className="item">
					<h4>Precipitation</h4>
					<h5>10%</h5>
				</div>
				<div className="item">
					<h4>Humidity</h4>
					<h5>30%</h5>
				</div>
				<div className="item">
					<h4>Wind</h4>
					<h5>8 Km/h</h5>
				</div>
			</div>
			<div className="info-card">
				<h3>Temperature</h3>
				<div className="item">
					<h4>06:00AM</h4>
					<h5>17º</h5>
				</div>
				<div className="item">
					<h4>12:00AM</h4>
					<h5>30º</h5>
				</div>
				<div className="item">
					<h4>06:00PM</h4>
					<h5>10º</h5>
				</div>
				<div className="item">
					<h4>12:00PM</h4>
					<h5>15º</h5>
				</div>
			</div>
			<div className="img-card">
				<img src={mumbai} alt="another mumbai view" />
			</div>
		</>

	);
};
// Main.propTypes = {
// 	getPosts: PropTypes.func
// };
export default Sidebar;