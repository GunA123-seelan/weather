import React from 'react'
import './Show.css';
const Show = ({temp,des,city,show,setShow,feels,humidity}) => {
    const go_back=()=>{
     setShow(false);
    }
  return (
    <div className='show'>
        <h2>{city}</h2>
        <p>{temp}°C</p> 
        <p>{des}</p>
        <p>{feels}</p>
        <p>{humidity}</p>
        <button className='btn_back' onClick={go_back}>Back</button>
    </div>
  )
}

export default Show