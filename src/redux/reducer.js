import { FETCH_WEATHER_FAILURE, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_REQUEST } from './constant';

const initialState = {
    weatherData: [],
    isLoading: false,
    error: null
};

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_WEATHER_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case FETCH_WEATHER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                weatherData: action.payload,
                error: null
            };
        case FETCH_WEATHER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default weatherReducer;