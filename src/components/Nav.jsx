import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav({onSearch}) {
  return (
    <nav className='navbar'>
      <Link to={'/'}>
        <img src={Logo} alt='logoHenry'/>
          Henry - Weather App
      </Link>
      <Link to={'/about'}>About</Link>
      <SearchBar onSearch={onSearch}/>
      </nav>
  );
};

export default Nav;
