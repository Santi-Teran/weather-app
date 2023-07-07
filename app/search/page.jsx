'use client'
import { useState } from "react";
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import WeatherData from "@/components/WeatherData"
import getWeather from "@/actions/getWeather";
import Input from "@/components/Input";

const Search = () => {

  const [location, setLocation] = useState(null);
  const [error, setError] = useState(false);

  const searchLocation = async (input) => {
    const data = await getWeather(input);
    if (data.error) {
      setError(true);
      setLocation(null);
    } else {
      setError(false);
      setLocation(data);
    }
  };

  return (
    <div className="h-full w-full overflow-hidden overflow-y-auto bg-gradient-to-tr from-purple to-orange">
      <Header />
      <div className="mx-20 lg:mx-28">
        <Input onSearch={searchLocation} />
      </div>
      <div>
          {error ? (
            <div className="flex justify-center items-center my-40">
              <p className="text-center text-2xl font-bold">
                City not found. Please enter a valid city.
              </p>
            </div> 
            ) : ( 
              location && <WeatherData location={location} />
          )}
        </div>
    </div>
  )
}

export default Search;