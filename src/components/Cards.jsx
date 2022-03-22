import React from 'react';
import Card from './Card'; // importo e compenente card para poderlo usar
//import {Cairns} from '../data'; // importo cairns de data

export default function Cards({cities, onClose}) {
  // acá va tu código
  // tip, podés usar un map
  //console.log(props.cities);
  if(cities){
  return (<div>
      { cities.map(city =>(
        <Card 
        name={city.name} 
        min={city.min} 
        max={city.max} 
        img={city.img} 
        onClose={() => onClose(city.id)} 
        id={city.id}
        key={city.id}/> //si cities existe, creo un componente "Card" para cada ciudad trayendo la informacion de donde aparece en la console
      ))
    }
  </div>)
  } else {
    return (
      <div>Sin ciudades</div>
    )
  }
};
