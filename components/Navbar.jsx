"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [showInput, setShowInput] = useState(false);

  const handleInputClick = () => {
    setShowInput(!showInput);
  };
  return (
    <nav className="flex lg:justify-between justify-around lg:py-6 lg:px-24 p-3 items-center shadow-md bg-zinc-50">
      <h1 className="text-xl lg:text-3xl text-stone-900 font-semibold">Eatmallow</h1>
      <div className="lg:hidden flex">
       <Dropdown />
      </div>
      <div className="lg:flex hidden">
        <div className="flex items-center rounded-xl p-1 mx-4 border-stone-800 focus-within:border-b shadow-sm">
          <svg
            onClick={handleInputClick}
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 pt-0.5 text-black dark:text-white duration-1000 ease-in-out transform hover:rotate-45"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          {showInput && (
            <input
              className="ml-2 outline-none bg-transparent font-semibold text-stone-800 dark:text-white dark:placeholder-gray-300 dark:placeholder-opacity-50 placeholder:text-gray-600 w-full"
              type="text"
              name="search"
              id="search"
              placeholder="Yemek ara"
            />
          )}
        </div>
        <ul className="flex items-center space-x-2">
          <li className="font-bold text-black dark:text-gray-400">
            <Button variant="ghost">Ana Sayfa</Button>
          </li>
          <li className="font-bold text-black dark:text-gray-400">
            <Button variant="ghost">Yemek Bul</Button>
          </li>

          <li>
            <Dropdown />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
