
import { FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE } from './constant';

const URL = 'https://api.openweathermap.org/data/2.5';

const API_KEY = '8ea5a669f67c1043ab1ad786a6a73240';

export const fetchWeatherRequest = () => {
    return {
        type: FETCH_WEATHER_REQUEST
    };
};

export const fetchWeatherSuccess = (weatherData) => {
    return {
        type: FETCH_WEATHER_SUCCESS,
        payload: weatherData
    };
};

export const fetchWeatherFailure = (error) => {
    return {
        type: FETCH_WEATHER_FAILURE,
        payload: error
    };
};


export const fetchUsers = (cityName = 'Patna') => {
    return async (dispatch) => {
        try {
            dispatch(fetchWeatherRequest());
            const response = await fetch(`${URL}/forecast?q=${cityName}&units=metric&appid=${API_KEY}`);
            const data = await response.json();
            dispatch(fetchWeatherSuccess(data));
        } catch (error) {
            dispatch(fetchWeatherFailure(error.message));
        }
    };
};