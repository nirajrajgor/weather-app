import { toJson } from 'unsplash-js';
import { unsplash } from "../../App";
import { getPhotos } from './HomeAction';

export const searchPhotoApi = (cityName = "mumbai") => {
	return function (dispatch, getState) {
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