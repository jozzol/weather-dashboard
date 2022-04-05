import React, {useState} from 'react'
import axios from 'axios'
import Searchbar from './components/Searchbar.jsx';
import Cards from './components/Cards.jsx';
import UseDate from './components/UseDate.jsx';

function App() {
  const [data, setData] = useState([])
  function onClose(id) {
    setData(oldData => oldData.filter(c => c.id !== id));
  }
  // console.log(data)
  

  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=3f587a1638de70e9fb2c0c486e133909`

  function searchLocation (ciudad) {  
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=3f587a1638de70e9fb2c0c486e133909&units=metric`)
      .then((response) =>{
        // console.log(response.data)
        if(response.data !== undefined){
          const city ={
            name: response.data.name,
            temp:response.data.main.temp,
            description: response.data.weather[0].description,
            feels_like: response.data.main.feels_like,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            id: response.data.id,
            img: response.data.weather[0].icon,
          }
          setData(oldData => [...oldData, city]);
        }
      })
  }
  return (
    <div className="app">
      <div>
        <h1>Weather Dashboard</h1>
        <UseDate/>
      </div>
      <div>
        <Searchbar search={searchLocation}/>
        <Cards
          data={data}
          onClose={onClose}
          />
      </div>
      
    </div>
  )
}

export default App;
