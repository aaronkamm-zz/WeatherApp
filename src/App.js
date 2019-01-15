import React from 'react';
import Titles from './components/Titles.js';
import Form from './components/Form.js';
import Weather from './components/Weather.js'

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
        error: 'Please enter a valid value'
      })
    }
    
    
    
    
    
  
    
  }
  
  render(){
    return (
      <div>
        <Titles />
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
    )
  }
}
export default App;