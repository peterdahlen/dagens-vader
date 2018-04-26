import React from 'react';

class Weather extends React.Component {
    render() {
        return (
            <div>
                { this.props.city && this.props.country && <p>Plats: { this.props.city }, { this.props.country }</p> }
                { this.props.temrature && <p>Tempratur: { this.props.temprature }</p> }
                { this.props.wind && <p>Vind: { this.props.wind }m/s</p> }
                { this.props.description && <p>Väder: { this.props.description }</p> }
            </div>
        )
    }
}

export default Weather;