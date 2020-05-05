import React from 'react';
import mumbai from "../../assets/images/mumbai.jpg";
import degreeSymbol from "../../assets/images/degree-symbol.png";
import Search from './_utils/Search';
import GithubLink from './_utils/GithubLink';

const Main = props => {
	return (
		<div className="main-wrapper">
			{
				props.photo ?
					<img
						src={props.isMobile ? props.photo.urls.small : props.photo.urls.regular}
						alt={props.photo.alt_description} />
					:
					<img src={mumbai} alt={"Default mumbai location"} />
			}
			{
				props.isMobile &&
				<Search
					search={props.search}
					onChange={props.onChange}
				/>
			}
			<div className="info-wrapper">
				{
					props.weather ?
						props.weather.main ?
							<>
								<h2>
									{Math.round(props.weather.main.temp)}
									<img src={degreeSymbol} alt="degree symbol" />
								</h2>
								<div className="city-info">
									<h1><strong>{props.weather.name}</strong></h1>
									<h3>{new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h3>
								</div>
								{
									!props.isMobile && <GithubLink />
								}
							</>
							:
							<h2>{props.weather.message}</h2>
						:
						<h2>Loading...</h2>
				}
			</div>
		</div>
	);
};
// Main.propTypes = {
// 	getPosts: PropTypes.func
// };
export default Main;