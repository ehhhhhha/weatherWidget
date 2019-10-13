import React from 'react';

import '../css/App.css';
import OpenWeatherMap from '../APIs/OpenWeatherMap';
import Widget from './Widget';
import Editor from './Editor';
import UnitParser from '../UnitParser';

class App extends React.Component {

    // store geolocation data
    geoData = {};

    state = {
        temperature: null,
        errorMessage: null,
        unit: 'metric',
        city: '',
        title: '',
        showWind: true,
        windSpeed: '',
        windDirection: '',
        imgID: '',
        imgDescription: '',
    };

    /**
     * A callback function for child component to toggle visibility of wind information
     * @param {bool} bool whether wind box is checked
     */
    toggleWindDisplay = (bool) => {
        this.setState({
            showWind: bool
        });
    }

    /**
     * A callback function for child component to hanlde changes of unit of data
     */
    handleUnitChange = () => {
        // always change to the different unit
        const newUnit = this.state.unit === 'metric' ? 'imperial' : 'metric';
        // update unit state with new unit
        this.setState(
            { unit: newUnit },
            // then update weather data using the new unit
            () => this.getWeather(this.geoData));
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // initialize geolocation data
                this.geoData = position;
                // request weather data
                this.getWeather(position);
            },
            (err) => this.setState({ errorMessage: err.message })
        );
    }

    /**
     * Call OpenWeatherMap API based on current location
     * @param {response} position geolocation data 
     */
    getWeather = async (position) => {
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        // send GET request with location data using axios instance
        const response = await OpenWeatherMap.get('/weather', {
            params: {
                lat: latitude,
                lon: longitude,
                // specify the unit we want
                units: this.state.unit
            }
        });

        // parse returned data and update states
        this.setState({
            temperature: UnitParser.parseTempUnit(response.data.main.temp),
            windSpeed: UnitParser.parseWindUnit(response.data.wind.speed, this.state.unit),
            windDirection: UnitParser.parseDegreeToDirection(response.data.wind.deg),
            city: response.data.name,
            imgID: response.data.weather["0"].icon,
            imgDescription: response.data.weather["0"].description
        });
    }

    /**
     * Update user input text
     */
    onTitleInputChange = (input) => {
        this.setState({ title: input });
    }

    render() {
        return (
            <div className="ui container top-table">
                <div className="ui two column divided very relaxed grid">

                    <div className="column">
                        <Editor
                            titleBar={this.state.title}
                            onTitleInputChange={this.onTitleInputChange}
                            handleUnitChange={this.handleUnitChange}
                            toggleWindDisplay={this.toggleWindDisplay}
                        />
                    </div>

                    <div className="column">
                        <div className="ui padded fluid raised card" id="widget-card">
                            <Widget
                                title={this.state.title}
                                temperature={this.state.temperature}
                                showWind={this.state.showWind}
                                windSpeed={this.state.windSpeed}
                                windDirection={this.state.windDirection}
                                city={this.state.city}
                                imgDescription={this.state.imgDescription}
                                imgID={this.state.imgID}
                            />
                        </div>
                    </div>

                </div >
            </div >
        );
    }
}

export default App;