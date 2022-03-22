import React from 'react';

export default function City({city}){
    if(!city) return(
        <div>La ciudad indicada no existe</div>
    );
    return(
        <div>
            <div>
                <h1>{city.name}</h1>
                <div>
                    <div>Temperatura: {city.temp}</div>
                    <div>Clima: {city.weather}</div>
                    <div>Viento: {city.wind}</div>
                    <div>Cantidad de nubes: {city.clouds}</div>
                    <div>Latitud: {city.latitud}</div>
                    <div>Longitud: {city.longitud}</div>
                </div>
            </div>
        </div>
    )
}