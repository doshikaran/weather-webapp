import Image from "next/image";
import React from "react";

function DataWeather({ data }) {
  return (
    <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto z-10 p-5 uppercase tracking-widest font-semibold">
      <div className=" pt-12 relative flex justify-between">
        <div className=" flex flex-col items-center">
          <Image
            className=""
            width="100"
            height="100"
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt=""
          />
          <p className=" text-2xl">{data.weather[0].main}</p>
        </div>
        <p className=" text-8xl">{data.main.temp.toFixed(0)}&#176;</p>
      </div>

      <div className="relative p-8 rounded-md mb-10">
        <p className=" text-2xl text-center pb-5">Weather in {data.name}</p>
        <div className=" flex justify-between items-center">
          <div>
            <p>{data.main.feels_like.toFixed(0)}&#176;</p>
            <p>Feels like</p>
          </div>
          <div>
            <p>{data.main.humidity}%</p>
            <p>Humidity</p>
          </div>
          <div>
            <p>{data.wind.speed.toFixed(0)}MPH</p>
            <p>Wind flow</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataWeather;
