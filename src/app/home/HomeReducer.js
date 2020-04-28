import { GET_PHOTOS, GET_WEATHER_DATA } from "./ActionTypes";
import { getRandomInt } from "../utils/ReusableFunctions";

const INITIAL_STATE = {
	photos: [],
	weatherData: null
};

const HomeReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_PHOTOS:
			let randomNum1, randomNum2;
			randomNum1 = getRandomInt(9);
			randomNum2 = getRandomInt(9);
			while (randomNum1 === randomNum2) {
				randomNum2 = getRandomInt(9);
			}
			let photos = [action.data[randomNum1], action.data[randomNum2]];
			return {
				...state,
				photos: photos
			}
		case GET_WEATHER_DATA:
			return {
				...state,
				weatherData: action.data
			}
		default:
			return state
	}
};

export default HomeReducer