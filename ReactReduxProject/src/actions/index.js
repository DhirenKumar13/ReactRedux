import AXIOS from 'axios';

const API_KEY = 'f397e1ce74162c268aacb2559d575b26';
const OPENWEATHER_URL = 'api.openweathermap.org/data/2.5/forecast';

export const FETCH_ACTION_TYPE = 'FETCH_WEATHER';

export function fetchWeather(city) {

    const FINAL_URL = `${OPENWEATHER_URL}?appid=${API_KEY}`;
    const response = AXIOS.get('FINAL_URL', {
        params : {
            q : city
        }
    })
    return {
        type : FETCH_ACTION_TYPE,
        payload : response
    }
};