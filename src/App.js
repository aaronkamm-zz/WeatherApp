import React from 'react';
import Titles from './components/Titles.js';
import Form from './components/Form.js';
import Weather from './components/Weather.js'

const apiKey = "fcd1d3be3229265b6c5bdfd66d9a8078";

class App extends React.Component {
 
  constructor(props){
    super(props);
    this.getWeather = this.getWeather.bind(this);
  }

  async getWeather(e) {
    e.preventDefault();
    const zip = e.target.elements.zip.value.trim();
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apiKey}&units=imperial`);
    const data = await res.json();
    console.log(data);
  }
  
  render(){
    return (
      <div>
        <Titles />
        <Form getWeather = {this.getWeather} />
        <Weather />
      </div>
    )
  }
}



export default App;