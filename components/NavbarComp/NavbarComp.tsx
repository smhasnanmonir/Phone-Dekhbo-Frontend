"use client";

import React, { useState } from "react";
import logo from "../../assets/navbarphotos/smartphone_2097276.png";
import { Menu, X, Search, User, Heart, Book } from "lucide-react";
import Link from "next/link";

const NavbarComp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);
  const [closingTimeout, setClosingTimeout] = useState<NodeJS.Timeout | null>(
    null
  );
  const [showSearch, setShowSearch] = useState(false); // State to control search div visibility

  const menuLinks = [
    { name: "Find", href: "" },
    {
      name: "Type",
      href: "",
      dropdown: (
        <div className="p-4 bg-white rounded-lg">
          <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">
            Smartphones
          </p>
          <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">
            Tablets
          </p>
          <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">
            Accessories
          </p>
        </div>
      ),
    },
    {
      name: "Brand",
      href: "",
      dropdown: (
        <div className="p-4 bg-white rounded-lg grid grid-cols-8">
          <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">
            SAMSUNG
          </p>
          <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">XIAOMI</p>
          <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">ASUS</p>
          <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">
            INFINIX
          </p>
          <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">APPLE</p>
          <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">GOOGLE</p>
          <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">
            ALCATEL
          </p>
          <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">
            ULEFONE
          </p>
          <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">HUAWEI</p>
          <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">HONOR</p>
          <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">ZTE</p>
          <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">TECNO</p>
          <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">NOKIA</p>
          <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">OPPO</p>
          <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">
            MICROSOFT
          </p>
          <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">DOOGEE</p>
          <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">SONY</p>
          <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">REALME</p>
          <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">
            UMIDIGI
          </p>
          <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">
            BLACKVIEW
          </p>
          <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">LG</p>
          <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">
            ONEPLUS
          </p>
          <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">
            COOLPAD
          </p>
          <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">CUBOT</p>
          <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">HTC</p>
          <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">
            NOTHING
          </p>
          <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">CAT</p>
          <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">
            OUKITEL
          </p>
          <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">
            MOTOROLA
          </p>
          <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">VIVO</p>
          <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">SHARP</p>
          <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">ITEL</p>
          <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">LENOVO</p>
          <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">MEIZU</p>
          <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">
            MICROMAX
          </p>
          <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">TCL</p>
        </div>
      ),
    },
    {
      name: "Price Range",
      href: "",
      dropdown: (
        <div className="p-4 bg-white rounded-lg">
          <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">
            Under $100
          </p>
          <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">
            $100 - $500
          </p>
          <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">
            Above $500
          </p>
        </div>
      ),
    },
    { name: "Blog", href: "" },
  ];

  const handleMouseEnter = (index: number) => {
    if (closingTimeout) {
      clearTimeout(closingTimeout); // Clear the timeout if the user hovers back
      setClosingTimeout(null);
    }
    setHoveredLink(index);
  };

  const handleMouseLeave = () => {
    // Set a timeout to close the dropdown after 300ms
    const timeout = setTimeout(() => {
      setHoveredLink(null);
    }, 300);
    setClosingTimeout(timeout);
  };

  const menuItems = (
    <ul className="block md:flex gap-[30px]">
      {menuLinks.map((link, index) => (
        <li
          key={index}
          className="md:py-[0px] py-[5px] relative"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <Link className="font-semibold inline-block" href={link.href}>
            <p className="group relative w-max">
              <span className="px-1 relative z-10 group-hover:text-white md:text-xl">
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
    <div className="shadow-md p-[10px] px-[2%] relative">
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
            {/* Search Icon */}
            <div className="relative">
              <Search
                className="cursor-pointer"
                size={24}
                onClick={() => setShowSearch(!showSearch)} // Toggle search div
              />
              {/* Search Div */}
              {showSearch && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[300px] bg-white shadow-lg rounded-lg p-4">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
                  />
                  <button className="mt-2 w-full bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition-all duration-200 ease-in-out">
                    Search
                  </button>
                </div>
              )}
            </div>
            <div className="flex gap-[30px] items-center">
              <div className="relative group">
                <User size={34} className="cursor-pointer" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  Profile
                </span>
              </div>

              <div className="relative group">
                <Heart size={34} className="cursor-pointer" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  Favorites
                </span>
              </div>

              <div className="relative group">
                <Book size={34} className="cursor-pointer" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  Library
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown under the navbar */}
      {hoveredLink !== null && menuLinks[hoveredLink].dropdown && (
        <div
          className="absolute top-full left-0 w-full bg-white z-50"
          onMouseEnter={() => handleMouseEnter(hoveredLink)} // Keep dropdown open if hovered
          onMouseLeave={handleMouseLeave} // Close dropdown after delay
        >
          <div className="container mx-auto p-4">
            {menuLinks[hoveredLink].dropdown}
          </div>
        </div>
      )}

      {/* Mobile Nav */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mt-4 block md:hidden">
          <nav>{menuItems}</nav>
        </div>
      </div>
    </div>
  );
};

export default NavbarComp;
