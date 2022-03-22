import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';

export default function Card({max, min, name, img, onClose, id}){ //desctructuramos los valores en vez de usar solo props de card
  // acá va tu código
  return (
      <div className='carta'>
        <button onClick={onClose}>X</button>

        <Link to={`/city/${id}`}>
          <h4>{name}</h4>
        </Link>
        <div className='dentro'>  
          <p>Min</p>
          <p>{min}</p>
        </div>
        <div  className='dentro'>
          <p>Max</p>
          <p>{max}</p>
        </div>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt={"img"}/>
      </div>
    )
};
