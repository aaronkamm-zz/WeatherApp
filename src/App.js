import React from 'react';
import Titles from './components/Titles.js';
import Form from './components/Form.js';
import Weather from './components/Weather.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const apiKey = "fcd1d3be3229265b6c5bdfd66d9a8078";

class App extends React.Component {
  constructor(props){
    super(props);
    this.getWeather = this.getWeather.bind(this);
    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
    };
  }
  
  async getWeather(e) {
    try {
      e.preventDefault();
      const zip = e.target.elements.zip.value.trim();
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apiKey}&units=imperial`);
      const data = await res.json();
        // console.log(data.weather[0].description)
        // console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      })
    }
    catch(err) {
      console.log("failed fetch fafsf", err)
      this.setState({
        temperature: '',
        city: '',
        country: '',
        humidity: '',
        description: '',
        error: 'Please enter a valid U.S. zip code!'
      })
    } 
  }
  
  render(){
    return (
      <div className = "main">
        <div className = "wrapper">
            <div className = "container">
              <div className = "row">
                <div className = "col-xs-5 titles">
                  <Titles />
                </div>
                <div className = "col-xs-7 weather">
                  <Form getWeather = {this.getWeather} />
                  <Weather
                    temperature = {this.state.temperature} 
                    city = {this.state.city} 
                    country = {this.state.country} 
                    humidity = {this.state.humidity}
                    description = {this.state.description}
                    error = {this.state.error}
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;