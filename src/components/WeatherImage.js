import React from 'react';

/**
 * Initialize weather image appeared in widget
 * @param {imgID} props 
 */
const WeatherImage = (props) => {
    const baseURL = 'http://openweathermap.org/img/wn/';
    const suffix = '@2x.png';
    const URL = baseURL + props.imgID + suffix;
    return (
        <img
            src={
                // only retrieve image when ID is provided
                props.imgID && URL
            }
            alt={props.imgDescription}
        />
    );
};

export default WeatherImage;