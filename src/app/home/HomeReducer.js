import { GET_PHOTOS } from "./ActionTypes";

const INITIAL_STATE = {
  photos: [],
};

const HomeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PHOTOS:
      return {
        ...state,
        photos: action.data,
      };
    default:
      return state;
  }
};

export default HomeReducer;
