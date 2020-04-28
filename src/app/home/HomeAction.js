import { GET_PHOTOS, GET_WEATHER_DATA } from "./ActionTypes";

export const getPhotos = (data) => ({
	type: GET_PHOTOS,
	data
});

export const getWeather = (data) => ({
	type: GET_WEATHER_DATA,
	data
})