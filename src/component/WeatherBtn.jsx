import React from 'react'

const WeatherBtn = ({ cities, setCity, currentLocation, selectCity }) => {
  console.log("cities?",cities)
  return (
    <div>
      <button
        onClick={() => currentLocation("current")}
        className={selectCity === '' ? 'weather-btn active' : 'weather-btn'}
      >
        Current Location
      </button>
      {cities.map((item)=>(
        <button
          onClick={()=>setCity(item)}
          className={selectCity === item ? 'weather-btn active' : 'weather-btn'}
        >
          {item}
        </button>
      ))}
    </div>
  )
}

export default WeatherBtn