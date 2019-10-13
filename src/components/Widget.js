import React from 'react';

import WeatherImage from './WeatherImage';
import '../CSS/Widget.css';

const Widget = (props) => {

    const windInfo = props.windDirection + ' ' + props.windSpeed;
    return (
        <div className="ui left aligned padded grid" >
            <div className="sixteen wide column" id="widget-title">
                <h4>{props.title === '' ? 'TITLE OF WIDGET' : props.title}</h4>
            </div>
            <div className="sixteen column row widget">
                <div className="six wide column widget">
                    <WeatherImage
                        imgID={props.imgID}
                        imgDescription={props.imgDescription}
                    />
                </div>
                <div className="nine wide column widget">
                    <div className="ten column wide row widget" id="widget-city">
                        {props.city}
                    </div>
                    <div className="ten column wide row widget">
                        <b id="temperature">{props.temperature}</b>
                    </div>
                    <div className="ten column wide row widget">
                        {
                            props.showWind &&
                            <div ><b id="widget-wind">Wind </b>{windInfo}</div>
                        }
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Widget;