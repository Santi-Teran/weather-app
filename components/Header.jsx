'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Input from "./Input";
import WeatherData from "@/components/WeatherData";
import getWeather from "@/actions/getWeather";

const Header = () => {
  const router = useRouter();



  return (
    <div className="flex justify-between items-center lg:p-12 h-16 p-4">
      <div className="flex items-center">
        <Image src="/logo-solo.png" alt="Logo" width={40} height={40} />
        <h1 className="text-2xl py-2 px-4 rounded-xl italic font-bold hidden lg:flex">
          Weather App.
        </h1>
      </div>
      <ul className="flex gap-12 font-bold text-xl">
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/about'>About</Link></li>
      </ul>
    </div>
  );
};

export default Header;