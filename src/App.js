import React from 'react';
import Titles from './components/Titles.js';
import Form from './components/Form.js';
import Weather from './components/Weather.js'

class App extends React.Component {
  render(){
    return (
      <div>
        <Titles />
        <Form />
        <Weather />
      </div>
    )
  }
}



export default App;