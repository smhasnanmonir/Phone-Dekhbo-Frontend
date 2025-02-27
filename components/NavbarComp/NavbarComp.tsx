"use client";

import {
  Menu,
  Search,
  Lightbulb,
  ShoppingCart,
  LogIn,
  UserPlus,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const NavbarComp = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false); // New state for search box

  console.log(menuOpen);

  return (
    <div>
      <nav className="bg-[#012A4A] p-2 flex items-center justify-between">
        {/* Left section: Menu */}
        <div className="flex items-center space-x-4">
          <Menu
            className="text-white cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <span className="text-white font-bold text-xl ">Mobile Dekhan</span>
        </div>

        <div className="bg-[#023E8A] p-1 rounded items-center hidden md:flex">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent text-white outline-none px-2"
          />
          <Search className="text-white" />
        </div>

        {/* Right section: Search, Icons */}
        <div className="flex items-center space-x-4">
          <div className="flex md:hidden">
            <Search
              className="text-white cursor-pointer"
              onClick={() => setSearchOpen(!searchOpen)} // Toggle search box on mobile
            />
          </div>
          <div className="flex items-center space-x-2">
            <Lightbulb className="text-white hidden md:flex" />
            <ShoppingCart className="text-white" />
            <LogIn className="text-white" />
            <UserPlus className="text-white" />
          </div>
        </div>
      </nav>

      {/* Mobile Search Bar - appears when search icon is clicked */}
      {searchOpen && (
        <div className="bg-[#01497C] p-2 md:hidden flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent text-white outline-none flex-1 px-2"
          />
          <button
            className="text-white"
            onClick={() => setSearchOpen(false)} // Close search box
          >
            Close
          </button>
        </div>
      )}

      {/* Menu */}

      {menuOpen && (
        <div
          className="bg-[#01497C] text-white p-2 md:flex hidden gap-[20px] items-center justify-center transition-all duration-300 ease-in-out"
          style={{
            height: menuOpen ? "auto" : "0",
            overflow: "hidden",
          }}
        >
          <div className="block px-[15px] py-[5px] hover:bg-[#013A63] transition-all duration-150 ease-linear cursor-pointer">
            <Link href="/">Home</Link>
          </div>
          <div className="block px-[15px] py-[5px] hover:bg-[#013A63] transition-all duration-150 ease-linear cursor-pointer">
            <Link href="/">Price Range</Link>
          </div>
          <div className="block px-[15px] py-[5px] hover:bg-[#013A63] transition-all duration-150 ease-linear cursor-pointer">
            <Link href="/">News</Link>
          </div>
          <div className="block px-[15px] py-[5px] hover:bg-[#013A63] transition-all duration-150 ease-linear cursor-pointer">
            <Link href="/">Filter</Link>
          </div>
          <div className="block px-[15px] py-[5px] hover:bg-[#013A63] transition-all duration-150 ease-linear cursor-pointer">
            <Link href="/">Compare</Link>
          </div>
          <div className="block px-[15px] py-[5px] hover:bg-[#013A63] transition-all duration-150 ease-linear cursor-pointer">
            <Link href="/">Contact</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarComp;
