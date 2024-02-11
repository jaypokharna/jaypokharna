import React from "react";
import { UserRound } from "lucide-react";
import { MoreVertical } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <div className="navbar w-[100%] h-[10vh] relative max-mb:flex max-mb:justify-between max-mb:h-[7vh]">

        <div className="top flex max-mb:px-[10%] max-mb:gap-1 max-mb:py-0 max-mb:items-center hidden">
          <div className="circles w-4 h-4 rounded-[50%] bg-green-400"></div>
          <div className="circles w-4 h-4 rounded-[50%] bg-green-400"></div>
        </div>
        <a
          href="/"
          className="p-2 w-fit h-fit flex bg-green-400 brightness-50 cursor-not-allowed text-sm rounded-md absolute top-[50%] translate-y-[-50%] right-[3%]"
        >
          Contact Me
          <UserRound size={20} strokeWidth={1.75} />
        </a>
      </div>
    </>
  );
};

export default Navbar;
