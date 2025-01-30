"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoLogoGithub,
} from "react-icons/io";
import { GoLinkExternal } from "react-icons/go";
import Image from "next/image";
import rbac from "../assets/rbac.png";
import contacts from "../assets/contacts.png";
import netflix from "../assets/netflix.png";
import teams from "../assets/teams.png";
import tictactoe from "../assets/tictactoe.png";
import simon from "../assets/simon.png";
import portfolio from "../assets/portfolio.png";

const Projects: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (scrollRef.current) {
      setCanScrollLeft(scrollRef.current!.scrollLeft > 0);
      setCanScrollRight(
        scrollRef.current!.scrollLeft + scrollRef.current!.clientWidth <
          scrollRef.current!.scrollWidth
      );
    }
  };

  useEffect(() => {
    updateScrollButtons();
    if (scrollRef.current) {
      const currentRef = scrollRef.current;
      currentRef!.addEventListener("scroll", updateScrollButtons);
      return () =>
        currentRef!.removeEventListener("scroll", updateScrollButtons);
    }
  }, []);

  const scroll = (direction: number) => {
    if (scrollRef.current) {
      scrollRef.current!.scrollBy({ left: direction * 20, behavior: "smooth" });
    }
  };

  return (
    <div className="m-0 p-0 bg-slate-100 dark:bg-black text-black dark:text-white">
      <div className="flex justify-between items-center mx-4 my-0 p-4 ">
        <div className="subhead font-medium text-2xl md:pl-32">Projects</div>
        <div className="navigate flex md:pr-32 gap-4">
          <IoIosArrowBack
            className={`h-8 w-8 cursor-pointer ${
              canScrollLeft ? "hover:text-gray-400" : "text-gray-400"
            }`}
            onClick={() => canScrollLeft && scroll(-20)}
          />
          <IoIosArrowForward
            className={`h-8 w-8 cursor-pointer ${
              canScrollRight ? "hover:text-gray-400" : "text-gray-400"
            }`}
            onClick={() => canScrollRight && scroll(20)}
          />
        </div>
      </div>
      <div
        ref={scrollRef}
        className="w-full overflow-x-auto scrollbar-hide px-4"
        style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }}
      >
        <div className="inline-flex space-x-8 pl-4 md:pl-32 pr-4 md:pr-32">
          <div className="w-96 h-[500px] bg-white text-black rounded-lg shadow-md">
            <div className="w-[370px] h-[200px] m-2 p-1 rounded-lg relative">
              <a
                href="https://rbac-system-iota.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <Image
                  src={rbac}
                  alt="RBAC System"
                  className="w-full h-full object-cover rounded-md blur-[2px] hover:blur-none cursor-pointer"
                />
                <p className="absolute inset-0 flex items-center justify-center text-white font-normal rounded-md">
                  rbac-system <GoLinkExternal />
                </p>
              </a>
            </div>
            <div>
              <div className="text-xl font-semibold text-center">
                RBAC System
              </div>
              <div className="text-md p-2 text-center text-gray-700 ">
                <p>
                  A robust Role-Based Access Control (RBAC) <br /> web
                  application for managing user authentication,
                  <br /> authorization, and permissions.
                </p>
                <p className="mt-8 font-medium text-black">
                  ReactJS || TailwindCSS || NodeJS || ExpressJS
                </p>
              </div>
              <div className="flex justify-center">
                <a
                  href="https://www.github.com/rajathshttgr/rbac-system"
                  className="h-8 w-32 border rounded m-4 flex p-1 hover:bg-gray-800 hover:text-gray-50 cursor-pointer "
                >
                  <IoLogoGithub className="h-6 w-6 pr-1" />
                  Source Code
                </a>
              </div>
            </div>
          </div>

          <div className="w-96 h-[500px] bg-white text-black rounded-lg shadow-md">
            <div className="w-[370px] h-[200px] m-2 p-1 rounded-lg relative">
              <a
                href="https://rajathshttgr.github.io/contact-management/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <Image
                  src={contacts}
                  alt="Contact Management"
                  className="w-full h-full object-cover rounded-md blur-[2px] hover:blur-none"
                />
                <p className="absolute inset-0 flex items-center justify-center text-black font-normal rounded-md">
                  contact-management <GoLinkExternal />
                </p>
              </a>
            </div>
            <div>
              <div className="text-xl font-semibold text-center">
                Contact Management
              </div>
              <div className="text-md p-2 text-center text-gray-700 ">
                <p>
                  A CRM web app for managing contacts with React, <br />
                  and MongoDB. Features CRUD operations,
                  <br />
                  pagination, and sorting for efficient data handling.
                </p>
                <p className="mt-8 font-medium text-black">
                  ReactJS || MeterialUI || NodeJS || ExpressJS
                </p>
              </div>
              <div className="flex justify-center">
                <a
                  href="https://www.github.com/rajathshttgr/contact-management"
                  className="h-8 w-32 border rounded m-4 flex p-1 hover:bg-gray-800 hover:text-gray-50 cursor-pointer"
                >
                  <IoLogoGithub className="h-6 w-6 pr-1" />
                  Source Code
                </a>
              </div>
            </div>
          </div>

          {/* netflix clone */}

          <div className="w-96 h-[500px] bg-white text-black rounded-lg shadow-md">
            <div className="w-[370px] h-[200px] m-2 p-1 rounded-lg relative">
              <a
                href="https://rajathshttgr.github.io/netflix-clone/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <Image
                  src={netflix}
                  alt="Contact Management"
                  className="w-full h-full object-cover rounded-md blur-[2px] hover:blur-none"
                />
                <p className="absolute inset-0 flex items-center justify-center text-white font-normal rounded-md">
                  netflix-clone <GoLinkExternal />
                </p>
              </a>
            </div>
            <div>
              <div className="text-xl font-semibold text-center">
                Netflix Clone
              </div>
              <div className="text-md p-2 text-center text-gray-700 ">
                <p>
                  A Netflix-style app with Firebase authentication,
                  <br /> React Router, and TailwindCSS. Designed for <br />
                  seamless media browsing with a polished UI.
                </p>
                <p className="mt-8 font-medium text-black">
                  ReactJS || Bootstrap || Firebase
                </p>
              </div>
              <div className="flex justify-center">
                <a
                  href="https://www.github.com/rajathshttgr/netflix-clone"
                  className="h-8 w-32 border rounded m-4 flex p-1 hover:bg-gray-800 hover:text-gray-50 cursor-pointer"
                >
                  <IoLogoGithub className="h-6 w-6 pr-1" />
                  Source Code
                </a>
              </div>
            </div>
          </div>

          {/* team management */}

          <div className="w-96 h-[500px] bg-white text-black rounded-lg shadow-md">
            <div className="w-[370px] h-[200px] m-2 p-1 rounded-lg relative">
              <a
                href="https://rajathshttgr.github.io/Team-Management/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <Image
                  src={teams}
                  alt="Team Management"
                  className="w-full h-full object-cover rounded-md blur-[2px] hover:blur-none"
                />
                <p className="absolute inset-0 flex items-center justify-center text-black font-normal rounded-md">
                  team-management <GoLinkExternal />
                </p>
              </a>
            </div>
            <div>
              <div className="text-xl font-semibold text-center">
                Team-Management
              </div>
              <div className="text-md p-2 text-center text-gray-700 ">
                <p>
                  A single-page app for organizing and categorizing <br /> team
                  members. Built with React and <br /> Bootstrap for easy
                  selection and tracking.
                </p>
                <p className="mt-8 font-medium text-black">
                  ReactJS || Bootstrap
                </p>
              </div>
              <div className="flex justify-center">
                <a
                  href="https://www.github.com/rajathshttgr/team-management"
                  className="h-8 w-32 border rounded m-4 flex p-1 hover:bg-gray-800 hover:text-gray-50 cursor-pointer"
                >
                  <IoLogoGithub className="h-6 w-6 pr-1" />
                  Source Code
                </a>
              </div>
            </div>
          </div>

          {/* Simon Game */}

          <div className="w-96 h-[500px] bg-white text-black rounded-lg shadow-md">
            <div className="w-[370px] h-[200px] m-2 p-1 rounded-lg relative">
              <a
                href="https://rajathshttgr.github.io/simon-game"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <Image
                  src={simon}
                  alt="Simon Game"
                  className="w-full h-full object-cover rounded-md blur-[2px] hover:blur-none"
                />
                <p className="absolute inset-0 flex items-center justify-center text-white font-normal rounded-md">
                  simon-game <GoLinkExternal />
                </p>
              </a>
            </div>
            <div>
              <div className="text-xl font-semibold text-center">
                Simon Game
              </div>
              <div className="text-md p-2 text-center text-gray-700 ">
                <p>
                  A memory-based game where players <br /> repeat an
                  increasingly complex sequence of <br /> colored lights to test
                  their recall skills.
                </p>
                <p className="mt-8 font-medium text-black">
                  JavaScript || Bootstrap || HTML || CSS
                </p>
              </div>
              <div className="flex justify-center">
                <a
                  href="https://www.github.com/rajathshttgr/simon-game"
                  className="h-8 w-32 border rounded m-4 flex p-1 hover:bg-gray-800 hover:text-gray-50 cursor-pointer"
                >
                  <IoLogoGithub className="h-6 w-6 pr-1" />
                  Source Code
                </a>
              </div>
            </div>
          </div>

          {/* tic Tac Toe game */}
          <div className="w-96 h-[500px] bg-white text-black rounded-lg shadow-md">
            <div className="w-[370px] h-[200px] m-2 p-1 rounded-lg relative">
              <a
                href="https://rajathshttgr.github.io/TicTacToe-Game/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <Image
                  src={tictactoe}
                  alt="Tic Tac Toe"
                  className="w-full h-full object-cover rounded-md blur-[2px] hover:blur-none"
                />
                <p className="absolute inset-0 flex items-center justify-center text-white font-normal rounded-md">
                  tictactoe-game <GoLinkExternal />
                </p>
              </a>
            </div>
            <div>
              <div className="text-xl font-semibold text-center">
                Tic Tac Toe Game
              </div>
              <div className="text-md p-2 text-center text-gray-700 ">
                <p>
                  A classic Tic Tac Toe game where players <br /> compete
                  against a smart AI, aiming to align three <br />
                  marks in a row, column, or diagonal.
                </p>
                <p className="mt-8 font-medium text-black">
                  JavaScript || HTML || CSS
                </p>
              </div>
              <div className="flex justify-center">
                <a
                  href="https://www.github.com/rajathshttgr/TicTacToe-Game"
                  className="h-8 w-32 border rounded m-4 flex p-1 hover:bg-gray-800 hover:text-gray-50 cursor-pointer"
                >
                  <IoLogoGithub className="h-6 w-6 pr-1" />
                  Source Code
                </a>
              </div>
            </div>
          </div>

          {/* portfolio */}
          <div className="w-96 h-[500px] bg-white text-black rounded-lg shadow-md">
            <div className="w-[370px] h-[200px] m-2 p-1 rounded-lg">
              <Image
                src={portfolio}
                alt="Portfolio Website"
                className="w-full h-full object-cover rounded-md blur-[2px] hover:blur-none"
              />
            </div>
            <div>
              <div className="text-xl font-semibold text-center">
                Portfolio Website
              </div>
              <div className="text-md p-2 text-center text-gray-700 ">
                <p>
                  This is a portfolio website the one which you <br /> are
                  viewing now it focuses on arranging my projects, <br /> games,
                  and contact details in a single place.
                </p>
                <p className="mt-8 font-medium text-black">
                  NextJS || ReactJS || TailwindCSS
                </p>
              </div>
              <div className="flex justify-center">
                <a
                  href="https://www.github.com/rajathshttgr/portfolio"
                  className="h-8 w-32 border rounded m-4 flex p-1 hover:bg-gray-800 hover:text-gray-50 cursor-pointer"
                >
                  <IoLogoGithub className="h-6 w-6 pr-1" />
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
