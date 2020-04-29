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
			search: ""
		}
	}

	componentDidMount() {
		if (this.props.homeState.photos.length === 0) {
			this.props.searchPhotoApi();
		}
		// TO GET TODAYS WEATHER DATA
		this.props.getWeatherApi();
		// TO GET FORCAST DATA FOR NEXT 5 DAYS.
		this.props.getForcastApi();
	}

	debounced = debounce((search) => {
		console.log('====================================');
		console.log("INSIDE DEBPUNCE", search);
		console.log('====================================');
		this.props.searchPhotoApi(search);
		this.props.getWeatherApi(search);
		this.props.getForcastApi(search);
	}, 600);

	onChange = (e) => {
		this.setState({ search: e.target.value }, () => this.debounced(this.state.search));
	}


	render() {
		return (
			<div className="container">
				<main>
					<Main
						photo={this.props.homeState.photos[0]}
						cityName={this.props.homeState.weatherData ? this.props.homeState.weatherData.name : "Mumbai"}
						weather={this.props.homeState.weatherData ? this.props.homeState.weatherData.main : { temp: 35 }}
					/>
				</main>
				<aside>
					<Sidebar
						photo={this.props.homeState.photos[1]}
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