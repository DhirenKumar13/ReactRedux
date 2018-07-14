import axios from 'axios';

const API_KEY = 'f397e1ce74162c268aacb2559d575b26';
const OPENWEATHER_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_ACTION_TYPE = 'FETCH_WEATHER';

export function fetchWeather(city) {

    //http://api.openweathermap.org/data/2.5/forecast?q=Delhi&appid=f397e1ce74162c268aacb2559d575b26

    const FINAL_URL = `${OPENWEATHER_URL}&q=${city}`;

    console.log('Here ' , FINAL_URL , ' is the requested URL');

    const response = axios.get(FINAL_URL);

    return {
        type : FETCH_ACTION_TYPE,
        payload : response
    }
};