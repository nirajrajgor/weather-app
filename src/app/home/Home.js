import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Main from './main';
import Sidebar from './Sidebar';
import { searchPhotoApi, getWeatherApi, getForcastApi } from './Api';
import { debounce } from '../utils/ReusableFunctions';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: "",
			width: 0, // REPRESENTS THE SCREEN WIDTH
			height: 0 // REPRESENTS THE SCREEN HEIGHT
		}
	}

	componentDidMount() {
		// TO GET THE INITIAL SCREEN WIDTH AND HEIGHT.
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);

		if (this.props.homeState.photos.length === 0) {
			this.props.searchPhotoApi();
		}
		// TO GET TODAYS WEATHER DATA
		this.props.getWeatherApi();
		// TO GET FORCAST DATA FOR NEXT 5 DAYS.
		this.props.getForcastApi();
	}

	debounced = debounce((search) => {
		if (search !== "") {
			this.props.searchPhotoApi(search);
			this.props.getWeatherApi(search);
			this.props.getForcastApi(search);
		}
	}, 600);

	onChange = (e) => {
		this.setState({ search: e.target.value }, () => this.debounced(this.state.search));
	}

	updateWindowDimensions = () => {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}


	render() {
		return (
			<div className="container">
				<main>
					<Main
						photo={this.props.homeState.photos[0]}
						weather={this.props.homeState.weatherData}
						isMobile={this.state.width < 575.98}
						search={this.state.search}
						onChange={this.onChange}
					/>
				</main>
				<aside>
					<Sidebar
						photo={this.props.homeState.photos[1]}
						isMobile={this.state.width < 575.98}
						search={this.state.search}
						onChange={this.onChange}
						weatherData={this.props.homeState.weatherData}
						forcastData={this.props.homeState.forcastData}
					/>
				</aside>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	homeState: state.homeState
});
const mapDispatchToProps = {
	searchPhotoApi,
	getWeatherApi,
	getForcastApi
}
Home.propTypes = {
	// getPosts: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);