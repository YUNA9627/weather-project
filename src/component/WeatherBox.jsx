import React from "react";

export const WeatherBox = ({ weather, tempUnit, setTempUnit }) => {
  const temp = weather?.main?.temp;
  const displayTemp =
    tempUnit === "C" ? temp?.toFixed(1) : (temp * 1.8 + 32).toFixed(1);

  return (
    <>
      <div className="city">{weather && weather.name}</div>
      <div>
        <img
          src="https://www.emojiall.com/images/120/skype/1.2/1f324-fe0f.png"
          alt=""
        />
      </div>
      {/* <div>{weather?.name}</div> */}
      <span className="temp">
        {displayTemp}°{tempUnit}
      </span>
      <div className="temp-toggle">
        <button
          type="button"
          className={tempUnit === "C" ? "unit-btn active" : "unit-btn"}
          onClick={() => setTempUnit("C")}
        >
          ℃
        </button>
        <button
          type="button"
          className={tempUnit === "F" ? "unit-btn active" : "unit-btn"}
          onClick={() => setTempUnit("F")}
        >
          ℉
        </button>
      </div>
      <span className="description">{weather?.weather?.[0]?.description}</span>
    </>
  );
};

export default WeatherBox;
