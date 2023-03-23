import React, { useState, useEffect } from "react";

const Weather = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Pune");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=55ca647671cb061c631e9c9dd6eaaed3`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
      // console.log(resJson);
    };
    fetchApi();
  }, [search]);

  return (
    <div className="weatherApp">
      <div className="title">
        <h2> Weather App </h2>
      </div>
      <div>
        <input
          className="input"
          type="search"
          name="search"
          id="search"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>
      {!city ? (
        <h2>Not Found</h2>
      ) : (
        <div className="info">
          <p>City : {search}</p>
          <p>City : {city.temp}</p>
          <p>Min : {city.temp_min}</p>
          <p>Max : {city.temp_max}</p>
        </div>
      )}
    </div>
  );
};
export default Weather;
