import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "b979265f9415858512000ba26a9c2eb6";

class App extends React.Component {
  state = {
    city: undefined,
    country: undefined,
    temprature: undefined,
    description: undefined,
    humidity: undefined,
    sunrise: undefined,
    sunset: undefined, 
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
    this.setState({
      temprature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      wind: data.wind.speed,
      description: data.weather[0].main,
      error: ""
    });
  }
  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather 
          temprature={this.state.temprature}
          city={this.state.city}
          country={this.state.country}
          wind={this.state.wind}
          description={this.state.description}
          error={this.state.error} />
      </div>
    );
  }
}

export default App;