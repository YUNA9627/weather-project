import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './component/WeatherBox'
import WeatherBtn from './component/WeatherBtn';

// 1. 앱이 실행되자마자 현재 위치기반의 날씨가 보인다.
// 2. 날씨정보에는 도시, 섭씨, 화씨, 날씨상태 정보
// 3. 5개의 버튼이 있다. (한 개는 현재위치, 4개는 다른 도시)
// 4. 도시버튼을 클릭할 때 마다 도시별 날씨가 나온다.
// 5. current 현재 위치버튼을 누르면 다시 현재위치 기반의 날씨가 나온다.
// 6. 데이터 들고오는 동안 로딩 스피너가 돈다.
function App() {
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat,lon)
    });
  };

  const [weather, setWeather] = useState(null);
  const getWeatherByCurrentLocation = async(lat,lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=dd56d6e394987e95bf79ad3a21c1ea74&units=metric`;
    let response = await fetch(url)
    let data = await response.json();
    setWeather(data);
  }
  useEffect(()=>{
    getCurrentLocation()
  },[])
  return (
  <>
    <div className="container">
      <WeatherBox weather={weather}/>
      <WeatherBtn />
    </div> 
  </>
  )
}

export default App
