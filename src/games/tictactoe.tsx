import React from "react";
import Image from "next/image";
import maintanance from "../assets/maintanance.png";

const tictactoe = () => {
  return (
    <div className="text-center bg-black h-full rounded-lg">
      <div className="flex  flex-col justify-center items-center h-full">
        <Image
          src={maintanance}
          alt="maintanance error"
          className="h-96 w-96"
        />
        <p>Under Maintanance, Please Try Again later!</p>
      </div>
    </div>
  );
};

export default tictactoe;
