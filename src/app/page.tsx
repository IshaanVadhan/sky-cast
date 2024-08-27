"use client";

import { useEffect, useState } from "react";
import Select from "react-select";
import { customStyles, options } from "@/utils/select-options";
import {
  BsThermometerHalf,
  BsWind,
  BsDroplet,
  BsCompass,
  BsCloudRainHeavy,
} from "react-icons/bs";
import axiosInstance from "../utils/axios";
import PropertyCard from "./property-card";
import { areAllValuesNull, omitKey } from "@/utils/utils";

const Home = () => {
  const [data, setData] = useState<TLocalityWeather | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []); // to prevent SSR and only render on client as there is some issue from react-select with the current React/NextJS version

  const handleChange = (option: TLocation | null) => {
    setError("");
    if (option) {
      const localityId = option.value.localityId;
      axiosInstance
        .get("/get_locality_weather_data", {
          params: { locality_id: localityId },
        })
        .then((response) => {
          setData(response.data.locality_weather_data);
        })
        .catch((error) => {
          console.error(error);
          setError("Error fetching weather forecast.");
        });
    }
  };

  return (
    <div className="h-[100dvh] w-[100dvw] flex justify-center items-center bg-background-image bg-cover bg-center">
      <div className="bg-[#111928]/75 backdrop-blur-[2.5px] backdrop-saturate-150 border border-white/20 rounded-xl p-6 lg:w-1/2 lg:max-w-xl md:w-2/3 md:max-w-lg w-5/6 max-w-full">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 text-center">
          Sky<span className="text-purple-500">Cast</span>
        </h2>
        <hr className="border-t border-white/20 my-4" />
        {isMounted && (
          <Select
            options={options}
            onChange={handleChange}
            placeholder="Search location"
            styles={customStyles}
            noOptionsMessage={() => "Location not found"}
          />
        )}
        {error && (
          <div className="bg-[#ef4444]/25 backdrop-blur-[2.5px] backdrop-saturate-150 border border-red-800/60 rounded-lg py-2 px-3 mt-4 text-sm text-gray-100">
            {error}
          </div>
        )}
        {data &&
          (areAllValuesNull(omitKey(data, "rain_intensity")) ? (
            <p className="text-gray-300 mt-5 text-center text-sm sm:text-base ">
              No information available for this location.
            </p>
          ) : (
            <>
              <div className="flex justify-center items-center my-5 md:my-4 text-gray-100">
                <BsThermometerHalf className="text-6xl text-purple-500" />
                <div>
                  <p className="text-sm">Temperature</p>
                  <p className="font-bold text-4xl">
                    {data.temperature !== null
                      ? `${data.temperature.toFixed(2)} °C`
                      : "N/A"}{" "}
                  </p>
                </div>
              </div>
              <hr className="border-t border-white/20 my-4" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-100 mt-6">
                <PropertyCard
                  IconComponent={BsDroplet}
                  name="Humidity"
                  property={data.humidity}
                  unit="%"
                />
                <PropertyCard
                  IconComponent={BsWind}
                  name="Wind Speed"
                  property={data.wind_speed}
                  unit="m/s"
                />
                <PropertyCard
                  IconComponent={BsCompass}
                  name="Wind Direction"
                  property={data.wind_direction}
                  unit="°"
                />
                <PropertyCard
                  IconComponent={BsCloudRainHeavy}
                  name="Rain Accumulation"
                  property={data.rain_accumulation}
                  unit="mm"
                />
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default Home;
