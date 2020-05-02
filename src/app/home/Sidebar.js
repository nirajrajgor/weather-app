import React from 'react';
import mumbai from "../../assets/images/mumbai.jpg";
import { formatDateTime } from '../utils/ReusableFunctions';
import Search from './_utils/Search';

const Sidebar = props => {
	return (
		<>
			{
				!props.isMobile &&
				<Search
					search={props.search}
					onChange={props.onChange}
				/>
			}
			<div className="info-card">
				<h3>Weather Details</h3>
				{
					props.weatherData ?
						props.weatherData.main ?
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
							<h2>{props.weatherData.message}</h2>
						:
						<h2>Loading...</h2>
				}
			</div>
			<div className="info-card">
				<h3>Weather Forecast</h3>
				{
					props.forcastData ?
						props.forcastData.list ?
							props.forcastData.list.slice(0, 4).map(item => (
								<div className="item" key={item.dt}>
									<h4>{formatDateTime(item.dt)}</h4>
									<h5>{Math.round(item.main.temp)}º</h5>
								</div>
							))
							:
							<h2>{props.forcastData.message}</h2>
						:
						<h2>Loading...</h2>
				}
			</div>
			<div className="img-card">
				{
					props.photo ?
						<button onClick={props.onViewImage}>
							<img src={props.photo.urls.small} alt={props.photo.alt_description} />
							<span>VIEW IMAGE</span>
						</button>
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