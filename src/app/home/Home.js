import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Main from './main';
import Sidebar from './Sidebar';
import { searchPhotoApi, getWeatherApi } from './Api';
import { getRandomInt } from '../utils/ReusableFunctions';

// as long as it continues to be invoked, it will not be triggered
const debounce = (func, delay) => {
	let inDebounce
	return function () {
		const context = this
		const args = arguments
		clearTimeout(inDebounce)
		inDebounce = setTimeout(() => func.apply(context, args), delay)
	}
}

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: ""
		}
	}

	componentDidMount() {
		console.log("call search api");
		if (this.props.homeState.photos.length === 0) {
			this.props.searchPhotoApi();
		}
		this.props.getWeatherApi();
	}

	debounced = debounce((search) => {
		console.log('====================================');
		console.log("INSIDE DEBPUNCE", search);
		console.log('====================================');
		this.props.searchPhotoApi(search);
		this.props.getWeatherApi(search);
	}, 600);




	onChange = (e) => {
		this.setState({ search: e.target.value }, () => this.debounced(this.state.search));

		// this.setState({ search: e.target.value }, () => {
		// 	debounce(() => {
		// 		console.log("inside debounce");

		// 	}, 300)
		// });
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
	getWeatherApi
}
Home.propTypes = {
	getPosts: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);