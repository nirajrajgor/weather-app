import { toJson } from 'unsplash-js';
import { unsplash } from "../../App";
import { getPhotos, getWeather, getForcast } from './HomeAction';

export const searchPhotoApi = (cityName = "mumbai") => {
	return function (dispatch) {
		unsplash.search.photos(cityName, 1, 10, { orientation: "landscape" })
			.then(toJson)
			.then(json => {
				// Do something with the json object
				dispatch(getPhotos(json.results));
			}).catch(err => {
				// Your flawless error handling code
				console.log("Error")
			});
	};
}

export const getWeatherApi = (cityName = "mumbai") => {
	return function (dispatch) {
		fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_WEATHER_APP_ID}&units=metric`)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				dispatch(getWeather(data));
			}).catch((error) => {
				console.error('Error:', error);
			});
	};
}

export const getForcastApi = (cityName = "mumbai") => {
	return function (dispatch) {
		fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${process.env.REACT_APP_WEATHER_APP_ID}&units=metric`)
			.then((response) => response.json())
			.then((data) => {
				dispatch(getForcast(data));
			}).catch((error) => {
				console.error('Error:', error);
			});
	};
}