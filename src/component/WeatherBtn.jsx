import React from 'react'

const WeatherBtn = ({ cities, setCity }) => {
  console.log("cities?",cities)
  return (
    <div>
      <button>Current Location</button>
      {cities.map((item)=>(
        <button onClick={()=>setCity(item)}>{item}</button>
      ))}
    </div>
  )
}

export default WeatherBtn