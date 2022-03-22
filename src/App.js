import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import About from './components/About.jsx';
import City from './components/City';

function App() {

  const {pathname, search} = useLocation()

  const [cities, setCities] = useState([]);
  const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

  function onSearch(city){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)// con el fetch estamos llamando a la api
    .then(r => r.json())// este primer then es la respuesta del fetch que nombramos r y despues lo mapeamos usando json
    .then(resource =>{ // es siguiente the es el resultado del r.json
      if(resource.main !== undefined){// si no tengo main no se genero respuesta
        const city = {
          min: Math.round(resource.main.temp_min),
          max: Math.round(resource.main.temp_max),
          img: resource.weather[0].icon,
          id: resource.id,
          wind: resource.wind.speed,
          temp: resource.main.temp,
          name: resource.name,
          weather: resource.weather[0].main,
          clouds: resource.clouds.all,
          latitud: resource.coord.lat,
          longitud: resource.coord.lon
        };
        setCities(oldCities => [...oldCities, city]);
        //setCities([...cities, city]);// seteo cities con una copia de todo lo que tenia cities mas la nueva city
      }
      else{
        alert('ciudad no encontrada');
      }
    })
  }

  function onClose(id){// saca el card seleccionado donde se presiono el close
    setCities(oldCities => oldCities.filter(c => c.id !== id))// evalua los id y se queda con todos los que son diferentes
  }

  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }

  return (
    <div className="App">
      <div>
        <Routes>
          <Route pathname="/" element={()=><Nav onSearch={onSearch}/>}/>
          <Route pathname="/" element={()=><Cards citites={cities} onClose={onClose}/>}/>
          <Route pathname="/about">
            <About/>
          </Route>
          <Route pathname="/city/:cityID" element={({match})=><City city={onFilter(match.params.cityID)}/>}/>
        </Routes>    
          <Cards
            cities={cities} onClose={onClose}/*dentro del route va el nombre del componete en al linea del route*/
            />
      </div>
    </div>
  );
}

export default App;
