import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SparkLine from '../components/sparkline';
import GoogleMaps from '../components/google-maps';

class WeatherList extends Component {

    renderWeather(cityData) {
        const city = cityData.city.name;
        const temperature = cityData.list.map(weather => weather.main.temp);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const { lat, lon } = cityData.city.coord;
        //const Temperature = cityData.list.main.temp.map()
        return (
            <tr key={city} >
                <td>
                    <GoogleMaps lon={lon} lat={lat} />
                </td>
                <td>
                    <SparkLine data={temperature} color="orange" />
                </td>
                <td>
                    <SparkLine data={humidity} color="blue" />
                </td>
                <td>
                    <SparkLine data={pressure} color="green" />
                </td>
            </tr>
        )

    }
    render() {
        console.log(this.props.weather)
        return (
            <table className="table table-hover table-striped table-bordered">
                <thead>
                    <tr>
                        <th>City Map</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ weather }) {
    return {
        weather
    }
}

export default connect(mapStateToProps)(WeatherList);