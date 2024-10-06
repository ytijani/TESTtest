import { useEffect, useState } from "react";
import axios from "axios";

interface WeatherData {
  temperature: number;
  city: string;
  condition: string;
}

const useWeather = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeatherAndCity = async (latitude: number, longitude: number) => {
      try {
        const apiKey = "af0c5d45e93f3eaf790e566131302bea"; 
        const weatherResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
        );

        const { temp } = weatherResponse.data.main;
        const city = weatherResponse.data.name; 
        const condition = weatherResponse.data.weather[0].main; 

        setWeather({ temperature: temp, city, condition });
      } catch (err) {
        console.log("fetch error ", err);
        setError("Failed to fetch weather or location data.");
      }
    };

    const getCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchWeatherAndCity(latitude, longitude);
          },
          (error) => {
            console.error("Geolocation error:", error);
            setError("Unable to retrieve your location.");
          }
        );
      } else {
        setError("Geolocation is not supported by this browser.");
      }
    };

    getCurrentLocation();
  }, []);

  return { weather, error };
};

export default useWeather;
