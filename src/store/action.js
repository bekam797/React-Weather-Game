import axios from 'axios';
export const GET_CITIES = 'GET_CITIES';
export const ADD_SCORE = 'ADD_SCORE';
export const GET_HISTORY = 'GET_HISTORY';
export const CHANGE_CELSIUS = 'CHANGE_CELSIUS';
export const CHANGE_FAHRENHEIT = 'CHANGE_FAHRENHEIT';

const coordinatesArr = [42.315407, 43.356891999999995, 42, 43, 50, 20, 42.546245, 23.424076, 53.847818, 41.153332, 20.168331, 46.818188, 8.227512, 10.451526, 39.074208];

export const getCities = (cities) => {
    return {
        type: GET_CITIES,
        cities
    };
};

export const cities = () => {
    return dispatch => {
        const lat = coordinatesArr[Math.floor(Math.random() * coordinatesArr.length)];
        const lon = coordinatesArr[Math.floor(Math.random() * coordinatesArr.length)];

        axios.get(`http://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=2&units=metric&appid=8fdff1400ded057540fd611a99b46417`)
            .then(response => {
                dispatch(getCities(response.data.list));
            })
            .catch(error => console.log(error));
    };
};

export const saveHistory = (res) => {
    return {
        type: GET_HISTORY,
        citiesHistory: res
    };
};

export const storeHistory = (res) => {
    return dispatch => {
       dispatch(saveHistory(res));
    };
};

export const addScore = () => {
    return {
        type: ADD_SCORE
    };
};

export const celsiusToFar = () => {
    return {
        type: CHANGE_CELSIUS
    };
};

export const farToCelsius = () => {
    return {
        type: CHANGE_FAHRENHEIT
    };
};