import axios from 'axios';

const KEY = 'a89b26bc057d04a955bbca4b8e048c79';

export default axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5/',
    params: {
        APPID: KEY
    }
});