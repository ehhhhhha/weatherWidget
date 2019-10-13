import React from 'react';

const WeatherImage = (props) => {
    const baseURL = 'http://openweathermap.org/img/wn/';
    const suffix = '@2x.png';
    const URL = baseURL + props.imgID + suffix;
    return (
        <img
            src={props.imgID && URL}
            alt={props.imgDescription}
        />
    );
};

export default WeatherImage;