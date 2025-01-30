import React from "react";
import { IoLogoGithub } from "react-icons/io";
import TicTacToe from "../games/tictactoe";
import Simon from "../games/simon";

const games = () => {
  return (
    <div className="m-0 p-0 bg-slate-100 dark:bg-black text-black dark:text-white">
      <div className=" mx-4 p-4 pt-12 ">
        <div className="font-medium text-2xl md:pl-32">Games</div>

        <div className=" flex flex-col md:flex-row">
          <div className="w-full md:w-5/12 m-0 md:m-2 p-0 md:p-4 text-center">
            <h2 className="md:mt-20 font-semibold text-2xl">Tic Tac Toe</h2>
            <p className="text-md mt-3 text-gray-800 dark:text-gray-300">
              A classic Tic Tac Toe game where the player competes against a
              smart computer opponent, aiming to align three marks in a row,
              column, or diagonal while preventing the computer from foing the
              same.
            </p>
            <div className="flex justify-center">
              <a
                href="https://www.github.com/rajathshttgr/TicTacToe-Game"
                className="h-8 w-36 border rounded m-4 flex p-1 hover:bg-gray-200 hover:text-black cursor-pointer"
              >
                <IoLogoGithub className="h-6 w-6" />
                Source Code
              </a>
            </div>
          </div>
          <div className="w-full md:w-7/12 h-[34rem] border border-black dark:border-white rounded-lg text-center">
            <TicTacToe />
          </div>
        </div>

        <div className="mt-24 flex flex-col md:flex-row">
          <div className="hidden md:block w-full md:w-7/12 h-[34rem] border border-black dark:border-white rounded-lg text-center">
            <Simon />
          </div>
          <div className="w-full md:w-5/12 m-0 md:m-2 p-0 md:p-4 text-center">
            <h2 className="md:mt-20 font-semibold text-2xl">Simon Game</h2>
            <p className="text-md mt-3 text-gray-800 dark:text-gray-300">
              The Simon Game is a memory game where players repeat a sequence of
              colors. The game features four colored buttons that light up in a
              pattern, and the player must replicate the sequence as it becomes
              more complex.
            </p>
            <div className="flex justify-center">
              <a
                href="https://www.github.com/rajathshttgr/simon-game"
                className="h-8 w-36 border rounded m-4 flex p-1 hover:bg-gray-200 hover:text-black cursor-pointer"
              >
                <IoLogoGithub className="h-6 w-6" />
                Source Code
              </a>
            </div>
          </div>
          <div className="w-full md:hidden h-[34rem] border border-black dark:border-white rounded-lg text-center">
            <Simon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default games;
