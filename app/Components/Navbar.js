import React from "react";
import { UserRound } from "lucide-react";
import { Menu } from "lucide-react";

const Navbar = ({ visible, setVisible, mainVisible, setmainVisible }) => {
  return (
    <>
      <div className="navbar w-[100%] h-[10vh] relative max-mb:flex max-mb:justify-between max-mb:h-[9vh] max-mb:items-center max-mb:px-4">
        <div className="top max-mb:px-0 max-mb:gap-1 max-mb:py-0 max-mb:items-center hidden max-mb:flex">
          <div className="circles w-4 h-4 rounded-[50%] bg-green-400"></div>
          <div className="circles w-4 h-4 rounded-[50%] bg-green-400"></div>
        </div>

        <a
          href="mailto:pokharnajay@gmail.com"
          className="p-2 w-fit h-fit flex bg-green-400 brightness-60 cursor-pointer text-sm rounded-md absolute top-[50%] translate-y-[-50%] gap-1 right-[3%] max-mb:hidden"
          target="_blank"
        >
          Contact Me
          <UserRound size={20} strokeWidth={1.75} />
        </a>

        <div className="hidden max-mb:block">
          <a
            href="/"
            className="flex p-2 h-fit w-fit bg-green-400 brightness-50 cursor-not-allowed text-sm rounded-md gap-1"
          >
            Contact Me
            <UserRound size={20} strokeWidth={1.75} />
          </a>
        </div>

        <div className="menu hidden max-mb:block">
          <button
            onClick={() => {
              setVisible(!visible);
              setmainVisible(!mainVisible);
            }}
          >
            <Menu className=" m" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
