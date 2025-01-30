import React from "react";
import { IoLogoGithub } from "react-icons/io";

const games = () => {
  return (
    <div className=" m-4 p-4 mt-12 ">
      <div className="font-medium text-2xl md:pl-32">Games</div>

      <div className=" flex flex-col md:flex-row">
        <div className="w-full md:w-5/12 m-0 md:m-2 p-0 md:p-4 text-center">
          <h2 className="md:mt-20 font-semibold text-2xl">Tic Tac Toe</h2>
          <p className="text-md mt-3 text-gray-300">
            A classic Tic Tac Toe game where the player competes against a smart
            computer opponent, aiming to align three marks in a row, column, or
            diagonal while preventing the computer from foing the same.
          </p>
          <div className="flex justify-center">
            <button className="h-8 w-36 border rounded m-4 flex p-1 hover:bg-gray-200 hover:text-black">
              <IoLogoGithub className="h-6 w-6" />
              Source Code
            </button>
          </div>
        </div>
        <div className="w-full md:w-7/12 h-[34rem] border rounded-lg text-center">
          game board
        </div>
      </div>

      <div className="mt-24 flex flex-col md:flex-row">
        <div className="hidden md:block w-full md:w-7/12 h-[34rem] border rounded-lg text-center">
          game board
        </div>
        <div className="w-full md:w-5/12 m-0 md:m-2 p-0 md:p-4 text-center">
          <h2 className="md:mt-20 font-semibold text-2xl">Simon Game</h2>
          <p className="text-md mt-3 text-gray-300">
            The Simon Game is a memory game where players repeat a sequence of
            colors. The game features four colored buttons that light up in a
            pattern, and the player must replicate the sequence as it becomes
            more complex.
          </p>
          <div className="flex justify-center">
            <button className="h-8 w-36 border rounded m-4 flex p-1 hover:bg-gray-200 hover:text-black">
              <IoLogoGithub className="h-6 w-6" />
              Source Code
            </button>
          </div>
        </div>
        <div className="w-full md:hidden h-[34rem] border rounded-lg text-center">
          game board
        </div>
      </div>
    </div>
  );
};

export default games;
