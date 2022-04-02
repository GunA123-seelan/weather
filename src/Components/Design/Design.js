import React,{useState} from 'react'
import axios from 'axios';
import './Design.css';
import Show from '../Show/Show';
const Design = () => {
    const[input,setInput]=useState('');
    const[temp,setTemp]=useState();
    const[des,setDes]=useState();
    const[ci,setCi]=useState();
    const[feels,setFeels]=useState();
    const[humidity,setHumidity]=useState();
    const[show,setShow]=useState(false);
    const change=(e)=>{
        setInput(e.target.value);

    }
    const check=(e)=>{
        e.preventDefault();
        setInput('');
        findWeather();
        setShow(true);
    }
    const findWeather=async()=>{
        const apiKey='cd1415f8ed7471f51f9ad0763c085fd9';
        const units='metric';
        const url='https://api.openweathermap.org/data/2.5/weather?q='+input+"&appid="+apiKey+"&units="+units;
        const res=await axios.get(url);
        const temprature=res.data.main.temp;
        const feels_like=res.data.main.feels_like;
        const humidity=res.data.main.humidity;
        const description=res.data.weather[0].description;
        const city=res.data.name;
        setTemp(temprature);
        setDes(description);
        setFeels(feels_like);
        setHumidity(humidity);
        setCi(city);
        console.log("city",city)
        console.log(res,ci);
    }
  return (

    <div className='content'>
        <center>
            {
                show ? '':
                <div>
                <h1 className='head'>Check Weather by City</h1>
                <div className='input_fields'>
                    <input type="text" placeholder="search city" value={input} onChange={change} required/>
                    <button onClick={check} className="btn" >Search</button>
                </div>
                </div>
            }
            {
                show?
                <Show temp={temp} des={des} city={ci} show={show} setShow={setShow} check={check} 
                humidity={humidity} feels={feels}/>
                : ''
            }
        </center>
    </div>
  )
}

export default Design