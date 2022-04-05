import React from 'react';
import './Card.scss'

export default function Card ({name, temp, description, feels_like, humidity, wind, id, img, onClose}) {
    return (
      <div className="card bg-transparent border-info px-0 my-2 border-dark mh-100 mw-100"  >
        <div className='card-header bg-dark'>
            <button onClick={onClose} className="btn-close btn-close-white"></button>
            <p className="card-title">{name}</p>
        </div>
        <div className="card-body ">
          <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
          <div className="col">
            <div>
              <p>Temp: {temp}°C</p>
            </div>
            <div>
              <p>Feels like: {feels_like}°C</p>
            </div>
            <div >
              <p>Description: {description}</p>
            </div>
            <div >
              <p>Humidity: {humidity}</p>
            </div>
            <div >
              <p>Wind: {wind}M/S</p>
            </div>
          </div>
        </div>
      </div>
    );
};
