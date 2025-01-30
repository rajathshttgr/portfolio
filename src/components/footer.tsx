"use client";
import { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import { FaCloudMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";

const Footer = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message) return;
    window.open(
      `https://wa.me/917204954945?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    setMessage("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const syntheticEvent = {
        preventDefault: () => {},
        currentTarget: e.currentTarget.closest("form") as HTMLFormElement,
      } as React.FormEvent<HTMLFormElement>;
      handleSubmit(syntheticEvent);
    }
  };
  return (
    <>
      <div className="m-0 p-0 bg-slate-100 dark:bg-black flex flex-col md:flex-row md:justify-between w-full border-t border-gray-400 dark:border-gray-800 border-opacity-20">
        <div className="flex">
          <div className="m-4 md:m-6 ml-8 md:ml-16 text-gray-400 font-light">
            <p className="font-semibold mb-2 text-black dark:text-white">
              About me
            </p>
            <ul>
              <li className="hover:text-gray-800 dark:hover:text-white cursor-pointer">
                News
              </li>
              <li className="hover:text-gray-800 dark:hover:text-white cursor-pointer">
                Ideas
              </li>
              <li className="hover:text-gray-800 dark:hover:text-white cursor-pointer">
                Experiments
              </li>
              <li className="hover:text-gray-800 dark:hover:text-white cursor-pointer">
                Blogs
              </li>
            </ul>
          </div>

          <div className="m-4 md:m-6 text-gray-400 font-light">
            <p className="font-semibold mb-2 text-black dark:text-white">
              Coding Platforms
            </p>
            <ul>
              <li className="hover:text-gray-800 dark:hover:text-white cursor-pointer">
                <a href="https://www.leetcode.com/u/rajathshttgr">Leetcode</a>
              </li>
              <li className="hover:text-gray-800 dark:hover:text-white cursor-pointer">
                <a href="https://www.hackerrank.com/">HackerRank</a>
              </li>
              <li className="hover:text-gray-800 dark:hover:text-white cursor-pointer">
                <a href="https://www.geeksforgeeks.org/">GeekforGeeks</a>
              </li>
              <li className="hover:text-gray-800 dark:hover:text-white cursor-pointer">
                <a href="https://www.github.com/rajathshttgr">GitHub</a>
              </li>
              <li className="hover:text-gray-800 dark:hover:text-white cursor-pointer">
                <a href="https://www.unstop.com/">unStop</a>
              </li>
            </ul>
          </div>

          <div className="m-4 md:m-6 text-gray-400 font-light">
            <p className="font-semibold mb-2 text-black dark:text-white">
              Social media
            </p>
            <ul>
              <li className="hover:text-gray-800 dark:hover:text-white cursor-pointer">
                <a href="https://www.linkedin.com/in/rajathshttgr">LinkedIn</a>
              </li>
              <li className="hover:text-gray-800 dark:hover:text-white cursor-pointer">
                <a href="https://www.instagram.com/rajathshttgr">Instagram</a>
              </li>
              <li className="hover:text-gray-800 dark:hover:text-white cursor-pointer">
                <a href="https://www.x.com/RajathShttgr">X (Twitter)</a>
              </li>
              <li className="hover:text-gray-800 dark:hover:text-white cursor-pointer">
                <a href="https://www.medium.com/@rajathshttgr">Medium</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="m-6 md:mr-28">
          <p className="text-md text-gray-800 dark:text-white">
            Got an idea, collaboration, or just want to say hi? Let’s connect!
          </p>
          <div className="flex items-center">
            <form action="" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                className="my-4 w-60 md:w-80 h-10 border rounded-md bg-transparent p-4 border-black dark:border-white"
              />
              <button
                type="submit"
                className="h-10 w-20 ml-1 bg-black dark:bg-white text-white dark:text-black rounded-md shadow-md"
              >
                Send
              </button>
            </form>
          </div>
          <p className="text-xs text-gray-400">
            The message entered will be redirected to WhatsApp when you enter
            send.
          </p>
        </div>
      </div>

      <div className="bg-slate-100 dark:bg-black flex select-none text-gray-500">
        <div className="flex-grow p-4 ml-8">
          <p>&copy; 2024 Rajath Shettigar </p>
        </div>
        <div className="flex mr-10">
          <p className="p-3 my-2 text-gray-700 dark:text-gray-200 font">
            Theme
          </p>
          <button
            onClick={toggleTheme}
            className="p-3 md:p-2 px-5 md:px-4 m-2  mr-0 md:mr-4 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded"
          >
            {theme === "light" ? <FaCloudMoon /> : <IoSunnySharp />}
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;
