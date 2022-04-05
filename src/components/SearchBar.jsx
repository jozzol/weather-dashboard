import React, {useState} from "react";
import './Searchbar.scss'

function Searchbar(searchLocation){
    // console.log(searchLocation.search)
    const [location, setLocation] = useState('')
    //to pass the location to the function we define a new variable with its current value
    var ciudad = location

    return(
        
        <div className='form-control bg-transparent border-0 text-white'>
            <form onSubmit={(e) =>{
                e.preventDefault()
                searchLocation.search(ciudad)
                setLocation('')}}
                >
                <input 
                value={location}
                onChange={event=> setLocation(event.target.value)}
                placeholder='Search city...'
                type='text'/>
                {/* <input type="submit" value="Add city"/> */}
                <button type="submit" className="btn btn-outline-dark btn-light btn-lg rounded-pill mx-2">Add city</button>
            </form>

      </div>
    )
}

export default Searchbar