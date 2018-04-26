import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "b979265f9415858512000ba26a9c2eb6";

class App extends React.Component {
  getWeather = async (e) => {
    e.prevent.default();
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Helsingborg&appid=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
  }
  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }
}

export default App;