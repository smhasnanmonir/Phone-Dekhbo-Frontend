"use client";

import React from "react";
import logo from "../../assets/navbarphotos/smartphone_2097276.png";
import { Menu, X, Search, User, Heart, Book } from "lucide-react";
import Link from "next/link";
import { Button } from "../../components/ui/button";

const NavbarComp = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuLinks = [
    { name: "Find", href: "" },
    { name: "Type", href: "" },
    { name: "Brand", href: "" },
    { name: "Price Range", href: "" },
    { name: "Blog", href: "" },
  ];

  const menuItems = (
    <ul className="block md:flex gap-[30px]">
      {menuLinks.map((link, index) => (
        <li key={index} className="md:py-[0px] py-[5px]">
          <Link className="font-semibold inline-block" href={link.href}>
            <p className="group relative w-max">
              <span className="px-1 relative z-10 group-hover:text-white  md:text-xl">
                {link.name}
              </span>
              <span className="duration-300 ease-linear absolute left-0 bottom-0 w-full h-0.5 transition-all bg-indigo-600 z-0 group-hover:h-full"></span>
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="shadow-md p-[10px] px-[2%]">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <img className="w-[75px]" src={logo.src} alt="Mobile Dekhan Logo" />
          <h1 className="text-2xl font-semibold">Mobile Dekhan</h1>
        </div>
        <div className="block md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Desktop nav */}
        <div className="md:block hidden md:mx-auto">{menuItems}</div>
        <div className="md:block hidden md:ml-auto">
          <div className="flex gap-[30px] items-center">
            <div className="flex border border-r-2 p-2 rounded-lg items-center">
              <Search className="cursor-pointer" size={24} />
              <div className="">
                <input className="focus:outline-none" type="text" />
                <button className="bg-red-400 px-2 rounded-lg hover:bg-green-400 transition-all duration-200 ease-in-out">
                  Search
                </button>
              </div>
            </div>
            <User size={34} />
            <Heart size={34} />
            <Book size={34} />
          </div>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {/* Mobile Nav */}
        <div className="mt-4 block md:hidden">
          <nav>{menuItems}</nav>
        </div>
      </div>
    </div>
  );
};

export default NavbarComp;
