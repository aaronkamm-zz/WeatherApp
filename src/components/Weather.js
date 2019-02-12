import React from 'react';

class Weather extends React.Component {
    render(){
        return(
            <div className = "weatherInfo">
                {(this.props.temperature) && <div>The temperature is: {this.props.temperature}</div>}
                {(this.props.city && this.props.country) && <div>Location: {this.props.city}, {this.props.country} </div>}
                {(this.props.humidity) && <div>Humidity: {this.props.humidity}</div>}
                {(this.props.description) && <div>Description: {this.props.description}</div>}
                {(this.props.error) && <div>Error: {this.props.error}</div>}
            </div>
            
        )        
    }
}

export default Weather;