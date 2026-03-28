import React from 'react'

export const WeatherBox = ({weather}) => {
  return (
    <>
        <div className="city">{weather && weather.name}</div>
        {/* <div>{weather?.name}</div> */}
        <h2 className="temp">{weather?.main.temp}° / {(weather?.main.temp)*1.8+32}화씨</h2>
        <h4>{weather?.weather[0].description}</h4>
    </>
  )
}

export default WeatherBox