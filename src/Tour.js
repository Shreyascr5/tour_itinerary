import React, { useState } from 'react';

const Tour = ({id,name, image, price, info,removeTour}) => {
  const[readText,setReadText]=useState(false);
  return (
    <article className='single-tour'>
    <img src={image} alt={name} />
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className='tour-price'>${price}</h4>
      </div>
      <p>{readText? info :`${info.substring(0,200)}...`}</p>
      <button onClick={()=>{
        setReadText(!readText);
      }}>{readText?"show less":"read more"}</button>
      <button onClick={()=>
      {removeTour(id)}} className='delete-btn'>Not interested</button>
    </footer>
    </article>
  )
};

export default Tour;
