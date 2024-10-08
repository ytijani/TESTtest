'use client';

import useDateTime from "@/app/hooks/useDateTime";
import useWeather from "@/app/hooks/useWeather"; 
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import Image from "next/image";
import { Sun, CloudRain, Cloudy, CloudSnow, CloudFog, Cloud } from "lucide-react"; 

const Header = () => {
  const { date, time } = useDateTime();
  const { weather, error } = useWeather();

  const getWeatherIcon = (condition: string, temperature: number) => {
    let icon;
    let colorClass = "text-gray-500"; 

    if (temperature > 25) {
      icon = <Sun className="w-4 h-5" />;
      colorClass = "text-yellow-500";
    } else if (condition === 'Rain') {
      icon = <CloudRain className="w-4 h-5" />;
      colorClass = "text-blue-500"; 
    } else if (condition === 'Clouds') {
      icon = <Cloudy className="w-4 h-5" />;
      colorClass = "text-gray-400"; 
    } else if (condition === 'Snow') {
      icon = <CloudSnow className="w-4 h-5" />;
      colorClass = "text-blue-200"; 
    } else if (condition === 'Mist' || condition === 'Fog') {
      icon = <CloudFog className="w-4 h-5" />;
      colorClass = "text-gray-600"; 
    } else {
      icon = <Cloud className="w-4 h-5" />;
    }

    return <div className={colorClass}>{icon}</div>;
  };

  return (
    <header className="bg-white w-[98%] mx-auto h-[8vh] md:h-[10dvh] flex items-center mt-2 rounded-[8px]">
      <div className="flex items-center justify-between w-[96%] mx-auto p-2 md:p-0">
        {/* Logo and Name */}
        <div className="flex items-center gap-1">
          <Image src="/logo.svg" alt="Logo" width={35} height={5} />
          <p className="font-semibold text-[12px] md:text-[1rem]">Saffar Exchange</p>
        </div>

        {/* Date, Time, and Weather */}
        <div className="flex items-center gap-[10px] md:gap-[20px]">
          {/* Date */}
          <div className="flex items-center gap-[5px]">
            <AiOutlineCalendar className="text-blue-600" size={20} />
            <p className="font-medium text-[9px] md:text-[15px]">{date}</p>
          </div>

          {/* Time */}
          <div className="flex items-center gap-[5px]">
            <AiOutlineClockCircle className="text-blue-600" size={20} />
            <p className="font-medium text-[9px] md:text-[15px]">{time}</p>
          </div>

          {/* Temperature and Location */}
          {weather ? (
            <div className="flex items-center gap-[5px]">
              {getWeatherIcon(weather.condition, weather.temperature)} 
              <p className="font-medium text-[9px] md:text-[15px]">
                {weather.temperature}°C{" "}
                <span className="font-extralight text-[13px] md:text-[15px]">|</span> {weather.city}
              </p>
            </div>
          ) : error ? (
            <p className="text-red-500 text-[9px] md:text-[15px]">{error}</p>
          ) : (
            <p className="text-gray-500 text-[9px] md:text-[15px]">Loading weather...</p>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
