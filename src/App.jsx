/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import sky from './assets/1.png';
import title from './assets/main.png';
import fewClouds from './assets/2.png';
import sClouds from './assets/3.png'
import oClouds from './assets/4.png'
import bClouds from './assets/5.png'
import sRain from './assets/6.png'
import rain from './assets/7.png'
import thunder from './assets/8.png'
import snow from './assets/9.png'
import mist from './assets/10.png'
import haze from './assets/11.png'
import fog from './assets/12.png'
import tornado from './assets/13.png'
import sunrise from './assets/sunrise.png';
import sunset from './assets/sunset.png';

const App = () => {
   //syntax of useState

    //const [state,setState] = useState(0);

  const [weatherData,setWeatherData] = useState(null);
  const [location,setLocation] = useState("");
  const [submitted,setSubmitted] = useState(false);

  const fetchData = async()=>{
    try{
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=18efb947843be90af11b4166c63f4816`);
      setWeatherData(res.data);
      console.log(res.data);
    } catch(err){
      console.log("Error fetching");
    }
  }
  const notify = () => toast('🦄Welcome To Forecastify', {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
  
  useEffect(()=>{
       fetchData();
       
  },[location])
  useEffect(()=>{
    notify();
  },[])

  const formatTime = (timestamp) =>{
    //Date() is a class/instance which converts seconds to milliseconds
    const date = new Date(timestamp * 1000); // Multiply by 1000 to convert from seconds to milliseconds
    // here toLocaleTimeString inside it there is a code of en-{country name} by this it converts the time to local time of that country then return it by converting into string
    return date.toLocaleTimeString(`en-${weatherData.sys.country}`);
  }
  
  const convert = (deg) =>{
      return Math.round(deg-273);
  }
  const curDate = () =>{
    //format schema dediya kis format me hona chahiye date Thur 17aug
    const options = { weekday: 'short', day: 'numeric', month: 'short' };
    const currentDate = new Date();
    //fetching the date of particular country with given options-that is format 
    const formattedDate = currentDate.toLocaleString(`en-${weatherData.sys.country}`, options);

    // slicing the result which gives particular day which we want
    const modifiedFormattedDate = formattedDate.slice(0, 4) + formattedDate.slice(4);

    return modifiedFormattedDate;
  }

  return (
    <>
    
    <div className='main'>
     
    <div className='input-box'>
    <input type='text' className='input' value={location} onChange={(e)=>setLocation(e.target.value)} />
          <button type='submit' className="button-31" role="button" onClick={()=> setSubmitted(true)}>Submit</button>
    </div>
      {submitted ? (
       location ? (

      <div className='container'>
      <div className='data'>
        
        <div className='place'>
                 <h1> {weatherData.name} </h1>
        </div>
        
        <div className='temp'>
        {convert(weatherData.main.temp)}&deg;C
        </div>

        <div className='day'>
        {curDate()}
        </div>
        
        <div className='date'>
        {weatherData?(
          <>
          {weatherData.weather[0].description === "clear sky" ? (
            <> 
            <img src={sky} width={'50px'} height={'50px'} />
                          <p>{weatherData.weather[0].description}</p>
            </>
            
          ):(" ")} 
          {weatherData.weather[0].description === "few clouds" ? (
                        <>
                          <img src={fewClouds} width={'50px'} height={'50px'} />
                          <p>{weatherData.weather[0].description}</p>
                        </>
          ):(" ")} 
          {weatherData.weather[0].description === "scattered clouds" ? (
                        <>
                          <img src={sClouds} width={'50px'} height={'50px'} />
                          <p>{weatherData.weather[0].description}</p>
                        </>
          ):(" ")} {weatherData.weather[0].description === "overcast clouds" ? (
                        <>
                          <img src={oClouds} width={'50px'} height={'50px'} />
                          <p>{weatherData.weather[0].description}</p>
                        </>
          ):(" ")} 
          {weatherData.weather[0].description === "broken clouds" ? (
                        <>
                          <img src={bClouds} width={'50px'} height={'50px'} />
                          <p>{weatherData.weather[0].description}</p>
                        </>
          ):(" ")}
          {weatherData.weather[0].description === "shower rain" ? (
                        <>
                          <img src={sRain} width={'50px'} height={'50px'} />
                          <p>{weatherData.weather[0].description}</p>
                        </>
          ):(" ")}
          {weatherData.weather[0].description === "rain" ? (
                        <>
                          <img src={rain} width={'50px'} height={'50px'} />
                          <p>{weatherData.weather[0].description}</p>
                        </>
          ):(" ")}
          {weatherData.weather[0].description === "thunderstorm" ? (
                        <>
                          <img src={thunder} width={'50px'} height={'50px'} />
                          <p>{weatherData.weather[0].description}</p>
                        </>
          ):(" ")}
          {weatherData.weather[0].description === "snow" ? (
                        <>
                          <img src={snow} width={'50px'} height={'50px'} />
                          <p>{weatherData.weather[0].description}</p>
                        </>
          ):(" ")}
          {weatherData.weather[0].description === "mist" ? (
                        <>
                          <img src={mist} width={'50px'} height={'50px'} />
                          <p>{weatherData.weather[0].description}</p>
                        </>
          ):(" ")}
          {weatherData.weather[0].description === "haze" ? (
                        <>
                          <img src={haze} width={'50px'} height={'50px'} />
                          <p>{weatherData.weather[0].description}</p>
                        </>
          ):(" ")}
          {weatherData.weather[0].description === "fog" ? (
                        <>
                          <img src={fog} width={'50px'} height={'50px'} />
                          <p>{weatherData.weather[0].description}</p>
                        </>
          ):(" ")}
          {weatherData.weather[0].description === "tornado" ? (
                        <>
                          <img src={tornado} width={'50px'} height={'50px'} />
                          <p>{weatherData.weather[0].description}</p>
                        </>
          ):(" ")}

          
          
          </>
        ):(" ")}

        </div>


        <div className='time'>
        <div className='sunrise'>
        
        <img className="rise" src={sunrise} width={'35px'} />
                    <h5>{formatTime(weatherData.sys.sunrise)}</h5> 
        </div>
        <div className='sunset'>
                    <img src={sunset} className='set' />
                    <span>{formatTime(weatherData.sys.sunset)}</span>
        </div>
        </div>

       
        <div className='details'>
        <div className='pressure'>
        {weatherData.main.pressure} ATM
                <div>
                  Pressure</div>
        </div>
        <div className='humidity'>
      {weatherData.main.humidity}%
<div>
Humidity</div>
        </div>
        <div className='wind-speed'>
        {weatherData.wind.speed}km/hr
                <div>
                  Wind</div>
        </div>
        </div>
      </div>
      </div>

       ) : (" ")
      ): (" ")
    }
        <ToastContainer />



    </div>
    </>
  )
}

export default App
