'use client'
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { PiWindLight, PiDropLight, PiCloudRainLight, PiMapPinLight } from "react-icons/pi"
import Image from "next/image";

const WeatherData = ({ location }) => {
  const [unit, setUnit] = useState("C");

  const handleUnitToggle = () => {
    setUnit((prevUnit) => (prevUnit === "C" ? "F" : "C"));
  };

  const currentDay = location.forecast.forecastday[0];
  const upcomingDays = location.forecast.forecastday;

  const extractTime = (time) => {
    return time.slice(11, 16);
  };
  const extractHour = (time) => {
    return parseInt(time.slice(11, 13));
  };
  const currentHour = extractHour(location.location.localtime);
  const currentHourIndex = currentDay.hour.findIndex((hour) => extractHour(hour.time) >= currentHour);
  const formatDate = (date) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
  };
  const formatDayOfWeek = (date) => {
    const options = { weekday: "long" };
    const adjustedDate = new Date(date);

    if (adjustedDate.toDateString() === new Date().toDateString()) {
      return "Today";
    } else {
      return adjustedDate.toLocaleDateString(undefined, options);
    }
  };

  const upcomingDaysFromCurrent = upcomingDays.filter((day) => {
    const dayDate = new Date(day.date);
    const currentDate = new Date();
    return dayDate >= currentDate;
  });

  const settings = {
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: currentHourIndex,
    responsive: [
      {
        breakpoint: 1340,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="flex h-full w-full overflow-hidden overflow-y-auto lg:flex-row flex-col justify-center">
      <div className="lg:w-3/5">
        <div className="flex justify-between items-center">
          <img src={location.current.condition.icon} alt="Current Weather Icon" className="w-32" />
          <button onClick={handleUnitToggle} className="flex h-fit w-20 mx-8 justify-between bg-wwhite rounded-3xl">
            <span className={unit === "C" ? "activeUnit" : "inactiveUnit"}>°C</span>
            <span className={unit === "F" ? "activeUnit" : "inactiveUnit"}>°F</span>
          </button>
        </div>
        <div className="mx-8">
          <div className="flex justify-center items-start sm:gap-20 gap-12 lg:hidden">
            <div className="flex flex-col">
              <p className="sm:text-8xl text-6xl my-2">{unit === "C" ? location.current.temp_c : location.current.temp_f}°{unit}</p>
              <ul>
                <li>Max: {unit === "C" ? currentDay.day.maxtemp_c : currentDay.day.maxtemp_f}°{unit}</li>
                <li>Min: {unit === "C" ? currentDay.day.mintemp_c : currentDay.day.mintemp_f}°{unit}</li>
              </ul>
            </div>
            <div className="flex items-center gap-2 sm:text-2xl text-xl">
              <PiMapPinLight />
              <p className="w-fit">{location.location.name}, {location.location.region}, {location.location.country}</p>
            </div>
          </div>
          <p className="text-8xl my-2 hidden lg:flex">{unit === "C" ? location.current.temp_c : location.current.temp_f}°{unit}</p>
          <ul className="hidden lg:flex gap-4">
            <li>Max: {unit === "C" ? currentDay.day.maxtemp_c : currentDay.day.maxtemp_f}°{unit}</li>
            <li>Min: {unit === "C" ? currentDay.day.mintemp_c : currentDay.day.mintemp_f}°{unit}</li>
          </ul>
          <p className="text-2xl my-2">{formatDate(location.location.localtime)}</p>
          <p className="text-lg my-2">{formatDayOfWeek(location.location.localtime)} | {extractTime(location.location.localtime)}</p>
          <ul className="flex gap-4 my-2">
            <li className="flex items-center gap-2"><PiWindLight />{location.current.wind_kph} km/h</li>
            <li>|</li>
            <li className="flex items-center gap-2"><PiDropLight />{location.current.humidity} %</li>
            <li>|</li>
            <li className="flex items-center gap-2"><PiCloudRainLight />{location.current.precip_mm} mm</li>
          </ul>
          <div className="sm:w-4/5 mx-auto my-8 bg-wwhite rounded-3xl sm:bg-transparent sm:rounded-none">
          <Slider {...settings}>
            {currentDay.hour
              .map((hour) => (
                <div key={hour.time}>
                  <div className="m-1 sm:shadow sm:shadow-gray-200 p-2 flex flex-col items-center sm:bg-wwhite sm:rounded-md w-[80px] mx-auto">
                    <p>{extractTime(hour.time)}</p>
                    <img src={hour.condition.icon} alt="Hourly Weather Icon" />
                    <p>
                      {unit === "C" ? hour.temp_c : hour.temp_f}
                      °{unit}
                    </p>
                  </div>
                </div>
              ))}
          </Slider>
          </div>
          <div className="flex justify-center sm:flex-row flex-col">
            {upcomingDaysFromCurrent.map((day) => (
              <div
                key={day.date}
                className="m-1 shadow-sm shadow-gray-300 p-2 flex sm:flex-col items-center bg-wwhite rounded-md sm:w-[90px] sm:mb-12 justify-between"
              >
                <p>{formatDayOfWeek(day.date)}</p>
                <div className="flex items-center sm:flex-col gap-4">
                  <img src={day.day.condition.icon} alt="Weather Icon" />
                  <p>
                    {unit === "C" ? day.day.avgtemp_c : day.day.avgtemp_f}°{unit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-l-2 border-wwhite lg:w-2/5">
        <div className="lg:flex items-center h-32 mx-8 gap-2 text-3xl hidden">
          <PiMapPinLight />
          <p>{location.location.name}, {location.location.region}, {location.location.country}</p>
        </div>
        <div className="flex justify-center mx-8 gap-32 my-12">
          <div className="flex flex-col items-center gap-6">
            <p className="text-2xl">Sunrise</p>
            <div className=" w-24 h-44 bg-wwhite rounded-full flex flex-col justify-center items-center gap-4">
              <Image src='/reloj-1.png' alt="Amanecer" width={40} height={40} className="mt-2"/>
              {currentDay.astro.sunrise}
              <Image src='/amanecer.png' alt="Amanecer" width={50} height={50} />
            </div>
          </div>
          <div className="flex flex-col items-center gap-6">
            <p className="text-2xl">Sunset</p>
            <div className=" w-24 h-44 bg-wwhite rounded-full flex flex-col justify-center items-center gap-4">
              <Image src='/reloj-2.png' alt="Atardecer" width={40} height={40} className="mt-2"/>
              {currentDay.astro.sunset}
              <Image src='/atardecer.png' alt="Atardecer" width={50} height={50} />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="text-2xl">UV Index</p>
          <div className="flex flex-col items-center gap-4">
            <p className="">{currentDay.day.uv} / 10</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="127" height="105" viewBox="0 0 127 105" fill="none">
            <path d="M0 53.5C7.29013e-07 46.7369 1.64248 40.0401 4.83365 33.7918C8.02483 27.5435 12.7022 21.8662 18.5987 17.084C24.4952 12.3018 31.4954 8.50832 39.1996 5.9202C46.9038 3.33209 55.1611 2 63.5 2C71.839 2 80.0962 3.33209 87.8004 5.92021C95.5046 8.50833 102.505 12.3018 108.401 17.084C114.298 21.8662 118.975 27.5435 122.166 33.7918C125.358 40.0401 127 46.7369 127 53.5H120.821C120.821 47.395 119.338 41.3498 116.458 35.7095C113.577 30.0693 109.355 24.9444 104.032 20.6275C98.7094 16.3106 92.3903 12.8863 85.4358 10.55C78.4813 8.21375 71.0275 7.01128 63.5 7.01128C55.9725 7.01128 48.5187 8.21375 41.5642 10.55C34.6097 12.8863 28.2907 16.3106 22.9679 20.6275C17.6452 24.9444 13.4229 30.0693 10.5423 35.7095C7.66162 41.3498 6.17896 47.395 6.17896 53.5H0Z" fill="url(#paint0_linear_4_7918)"/>
            <circle cx="41.5" cy="7.5" r="7.5" fill="white"/>
            <defs>
            <linearGradient id="paint0_linear_4_7918" x1="135.015" y1="40.0959" x2="-28.5782" y2="50.8854" gradientUnits="userSpaceOnUse">
            <stop offset="0.154645" stop-color="#C4C4C4"/>
            <stop offset="0.813336" stop-color="#ED3C3C" stop-opacity="0.304914"/>
            <stop offset="1" stop-color="#FF0000" stop-opacity="0"/>
            </linearGradient>
            </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherData;