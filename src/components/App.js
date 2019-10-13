import React from 'react';

import '../CSS/App.css';
import OpenWeatherMap from '../APIs/OpenWeatherMap';
import Widget from './Widget';
import Editor from './Editor';
import UnitParser from '../UnitParser';

class App extends React.Component {

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

    toggleWindDisplay = (bool) => {
        this.setState({
            showWind: bool
        });
    }

    handleUnitChange = () => {
        const newUnit = this.state.unit === 'metric' ? 'imperial' : 'metric';

        this.setState(
            {
                unit: newUnit
            },
            () => this.getWeather(this.geoData));
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.geoData = position;
                this.getWeather(position);
            },
            (err) => this.setState({ errorMessage: err.message })
        );
    }

    getWeather = async (position) => {
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        const response = await OpenWeatherMap.get('/weather', {
            params: {
                lat: latitude,
                lon: longitude,
                units: this.state.unit
            }
        });

        this.setState({
            temperature: UnitParser.parseTempUnit(response.data.main.temp),
            windSpeed: UnitParser.parseWindUnit(response.data.wind.speed, this.state.unit),
            windDirection: UnitParser.parseDegreeToDirection(response.data.wind.deg),
            city: response.data.name,
            imgID: response.data.weather["0"].icon,
            imgDescription: response.data.weather["0"].description
        });
    }

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