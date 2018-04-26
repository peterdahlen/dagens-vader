import React from 'react';

const Weather = props => (
    <div>
        { props.city && props.country && <p>Plats: { props.city }, { props.country }</p> }
        { props.temprature && <p>Tempratur: { props.temprature }</p> }
        { props.wind && <p>Vind: { props.wind }m/s</p> } 
        { props.description && <p>Väder: { props.description }</p> }
        { props.error && <p>{ props.error }</p> }
    </div>
);

export default Weather;