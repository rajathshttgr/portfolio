"use client";

import React, { useState } from "react";
import { IoLogoGithub } from "react-icons/io";
import { IoClose, IoMenu } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth Scroll Function
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false); // Close menu on mobile after clicking
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-sm z-50 border-b border-gray-400 dark:border-gray-800 border-opacity-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-black dark:text-white text-xl font-bold">
            <a href="" className="select-none flex">
              rajathshttgr
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => handleScroll("about")}
              className="text-black dark:text-white hover:text-gray-600 hover:dark:text-gray-300 transition duration-200"
            >
              About
            </button>
            <button
              onClick={() => handleScroll("projects")}
              className="text-black dark:text-white hover:text-gray-600 hover:dark:text-gray-300 transition duration-200"
            >
              Projects
            </button>
            <button
              onClick={() => handleScroll("games")}
              className="text-black dark:text-white hover:text-gray-600 hover:dark:text-gray-300 transition duration-200"
            >
              Games
            </button>
            <button
              onClick={() => handleScroll("footer")}
              className="text-black dark:text-white hover:text-gray-600 hover:dark:text-gray-300 transition duration-200"
            >
              Contact
            </button>
            <a href="https://github.com/rajathshttgr" target="_blank">
              <IoLogoGithub className="h-6 w-6 text-black dark:text-white hover:text-gray-600 hover:dark:text-gray-300 transition duration-200" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-black dark:text-white hover:text-gray-300 focus:outline-none"
              onClick={() => setIsMenuOpen(true)}
            >
              <IoMenu className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Sliding Effect */}
      <div
        className={`fixed inset-0 h-screen bg-black bg-opacity-50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 w-3/4 h-screen bg-white dark:bg-black text-black dark:text-white shadow-lg transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMenuOpen(false)}>
            <IoClose className="w-8 h-8 text-black dark:text-white hover:text-gray-400" />
          </button>
        </div>

        {/* Mobile Menu Items */}
        <div className="flex flex-col space-y-4 p-6">
          <button
            onClick={() => handleScroll("about")}
            className="text-left text-black dark:text-white text-lg hover:text-gray-600 hover:dark:text-gray-300 transition"
          >
            About
          </button>
          <button
            onClick={() => handleScroll("projects")}
            className="text-left text-black dark:text-white text-lg hover:text-gray-600 hover:dark:text-gray-300 transition"
          >
            Projects
          </button>
          <button
            onClick={() => handleScroll("games")}
            className="text-left text-black dark:text-white text-lg hover:text-gray-600 hover:dark:text-gray-300 transition"
          >
            Games
          </button>
          <button
            onClick={() => handleScroll("footer")}
            className="text-left text-black dark:text-white text-lg hover:text-gray-600 hover:dark:text-gray-300 transition"
          >
            Contact
          </button>
          <a
            href="https://github.com/rajathshttgr"
            className="flex items-center text-black dark:text-white text-lg hover:text-gray-600 hover:dark:text-gray-300 transition"
            target="_blank"
          >
            GitHub <MdArrowOutward />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
