import React from 'react'

export const WeatherBox = ({weather}) => {
  const temp = weather?.main?.temp
  return (
    <>
        <div className="city">{weather && weather.name}</div>
        <div>
          <img src="https://www.emojiall.com/images/120/skype/1.2/1f324-fe0f.png" alt="" />
        </div>
        {/* <div>{weather?.name}</div> */}
        <h2 className="temp">{temp}° / {(temp * 1.8 + 32).toFixed(1)}°F</h2>
        <h4>{weather?.weather[0].description}</h4>
    </>
  )
}

export default WeatherBox