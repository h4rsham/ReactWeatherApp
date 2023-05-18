import React, { useEffect } from "react";

export default function WeatherInfo() {
  const [temperature, setTemperature] = React.useState("");

  // `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=68102d64e560bd2680f7ef8afcd13886` OLD API

  let location = "Dubai";
  useEffect(() => {
    async function fetchWeatherData() {
      const response = await fetch(
        `https://api.weatherbit.io/v2.0/forecast/daily?&city=${location}&key=44cbebc5694040768e4b8c4982357e37`
        // `https://api.weatherbit.io/v2.0/forecast/daily?&city=${location}&key=fe40af3cc0764eab96140997cd51aa38`
      );
      const data = await response.json();
      console.log(data);
      setTemperature(data.data[0].temp);
    }
    fetchWeatherData();
  }, []);

  return (
    <div>
      <h1>Weather Info for: {location}</h1>
      <h2>Temperature: {temperature}</h2>
    </div>
  );
}

// WeatherInfo();
