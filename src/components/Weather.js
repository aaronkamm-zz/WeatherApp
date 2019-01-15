import React from 'react';

class Weather extends React.Component {
    render(){
        return(
            <div>
                <div>The temperature is: {this.props.temperature}</div>
                <div>Location: {(this.props.city && this.props.country) && (`${this.props.city}, ${this.props.country}`)} </div>
                <div>Humidity: {this.props.humidity}</div>
                <div>Description: {this.props.description}</div>
                <div>Error: {this.props.error}</div>
            </div>
            
        )        
    }
}

export default Weather;