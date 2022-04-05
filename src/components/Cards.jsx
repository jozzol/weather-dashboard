import React from 'react';

import Card from './Card.jsx';

export default function Cards({data, onClose}) {
  return (
    <div className='row row-cols-1 row-cols-md-3 w-100'>
      {data.map(c => <Card
          key={c.id}
          name={c.name}
          temp={c.temp}
          description={c.description}
          feels_like={c.feels_like}
          humidity={c.humidity}
          wind={c.wind}
          img={c.img}
          onClose={() => onClose(c.id)}
        /> )}
    </div>
  );
}
