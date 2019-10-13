import React from 'react';

import WeatherImage from './WeatherImage';
import '../css/Widget.css';

/**
 * Display all the information on widget
 */
const Widget = (props) => {

    // initialize wind information
    const windInfo = props.windDirection + ' ' + props.windSpeed;
    // initialize default title of widget
    const widgetTitle = props.title === '' ? 'TITLE OF WIDGET' : props.title;
    return (
        <div className="ui left aligned padded grid" >
            <div className="sixteen wide column" id="widget-title">
                <h4>{widgetTitle}</h4>
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
                        <b id="widget-temperature">{props.temperature}</b>
                    </div>
                    <div className="ten column wide row widget">
                        {   // if show wind box is checked
                            props.showWind &&
                            <div id="windget-wind-info">
                                <b id="widget-wind">Wind </b>
                                {windInfo}
                            </div>
                        }
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Widget;