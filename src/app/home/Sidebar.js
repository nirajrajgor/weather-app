import React from 'react';
import mumbai from "../../assets/images/mumbai.jpg";

const Sidebar = props => {
	return (
		<>
			<div className="search-wrapper">
				<input
					type="text"
					placeholder="Search City"
					value={props.search}
					onChange={props.onChange}
				/>
			</div>
			<div className="info-card">
				<h3>Weather Details</h3>
				{
					props.weatherData ?
						<>
							<div className="item">
								<h4>Cloudy</h4>
								<h5>{props.weatherData.clouds.all}%</h5>
							</div>
							<div className="item">
								<h4>Pressure</h4>
								<h5>{props.weatherData.main.pressure} hPa</h5>
							</div>
							<div className="item">
								<h4>Humidity</h4>
								<h5>{props.weatherData.main.humidity}%</h5>
							</div>
							<div className="item">
								<h4>Wind</h4>
								<h5>{props.weatherData.wind.speed} m/s</h5>
							</div>
						</>
						:
						<h2>Loading...</h2>
				}
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
				{
					props.photo ?
						<img src={props.photo.urls.small} alt={props.photo.alt_description} />
						:
						<img src={mumbai} alt={"Default mumbai location"} />
				}
			</div>
		</>

	);
};
// Main.propTypes = {
// 	getPosts: PropTypes.func
// };
export default Sidebar;