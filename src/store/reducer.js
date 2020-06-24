import * as actionTypes from './action';

const initialState = {
    currentCities: [],
    history: [],
    score: 0
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_CITIES:
            return {
                ...state,
                currentCities: action.cities
            }
        case actionTypes.ADD_SCORE:
            return {
                ...state,
                score: state.score + 1,
            } 
        case actionTypes.GET_HISTORY: 
            return {
                ...state,
                history: [
                    ...state.history,
                    action.citiesHistory
                ]
            }
        case actionTypes.CHANGE_CELSIUS: 
            const updatedArrayCelsiusToFar = state.history.map((temp) => {
                return [{
                    ...temp[0], 
                    main: {
                        ...temp[0].main,
                        temp: (temp[0].main.temp * 9 / 5 + 32).toFixed(2)
                    }
                },
                {
                    ...temp[1], 
                    main: {
                        ...temp[1].main,
                        temp: (temp[1].main.temp * 9 / 5 + 32).toFixed(2)
                    }
                }, temp[2]]
            });
            return {
                ...state,
                history: updatedArrayCelsiusToFar
            }
            case actionTypes.CHANGE_FAHRENHEIT: 
                const updatedArrayFarToCelsius = state.history.map((temp) => {
                    return [{
                        ...temp[0], 
                        main: {
                            ...temp[0].main,
                            temp: ((temp[0].main.temp - 32) * 5 / 9).toFixed(2)
                        }
                    },
                    {
                        ...temp[1], 
                        main: {
                            ...temp[1].main,
                            temp: ((temp[1].main.temp - 32) * 5 / 9).toFixed(2)
                        }
                    }, temp[2]]
                });
                return {
                    ...state,
                    history: updatedArrayFarToCelsius
                }
        default: 
            return state;
    };
};

export default reducer;