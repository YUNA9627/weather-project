import { useEffect, useState } from 'react'
import './App.css'
import WeatherBox from './component/WeatherBox'
import WeatherBtn from './component/WeatherBtn'
import { ClipLoader } from "react-spinners";

function App() {
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState('')
  const [loading, setLoading] = useState(false)
  const [apiError, setAPIError] = useState("");
  const cities = ['paris', 'new york', 'tokyo', 'seoul']

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      getWeatherByCurrentLocation(lat, lon)
    })
  }

  const getWeatherByCurrentLocation = async (lat, lon) => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=dd56d6e394987e95bf79ad3a21c1ea74&units=metric&lang=kr`
      setLoading(true)
      let response = await fetch(url)
      let data = await response.json()
      setWeather(data)
      setLoading(false)
    } catch (err) {
      setAPIError(err.message);
      setLoading(false);
    }
  }

  const getWeatherByCity = async() => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dd56d6e394987e95bf79ad3a21c1ea74&units=metric&lang=kr`
      setLoading(true)
      let response = await fetch(url)
      let data = await response.json()
      setWeather(data);
      setLoading(false)
    } catch (err) {
      setAPIError(err.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if(city == ""){
      getCurrentLocation()
    }else {
      getWeatherByCity()
    }
  }, [city])

  const currentLocation = (city) => {
    if (city === "current") {
      setCity("");
    } else {
      setCity(city);
    }
  };

  return (
    <div className="wrap">
      {loading
        ? (
          <div className="content">
            <ClipLoader
              color="#ccc"
              loading={loading}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : !apiError ? (
        <div className="content">
          {weather && <WeatherBox weather={weather} />}
          <WeatherBtn
            cities={cities}
            setCity={setCity}
            currentLocation={currentLocation}
            selectCity={city}
          />
        </div>
        ) : (apiError)
        }
    </div>
  )
}

export default App