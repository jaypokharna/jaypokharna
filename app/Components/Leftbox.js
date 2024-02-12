import React, { useState } from "react";
import { Home } from "lucide-react";
import { PanelsTopLeft } from "lucide-react";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { Twitter } from "lucide-react";
import Social from "./Social";
import { X } from 'lucide-react';



const Leftbox = ({visible,setVisible,mainVisible,setmainVisible}) => {
  
  return (
  <>
    {visible && <div className="leftbox w-[22%] h-[100vh] bg-[rgb(20,19,25)] fixed left-0 top-[50%] translate-y-[-50%] px-2 max-mb:absolute max-mb:z-[999] max-mb:w-full max-mb:p-0 max-mb:bg-[rgb(28,27,34)] max-mb:overflow-hidden max-mb:h-full">
        <div className="top flex px-[10%] py-[7%] gap-1 max-mb:hidden">
          <div className="circles w-4 h-4 rounded-[50%] bg-green-400"></div>
          <div className="circles w-4 h-4 rounded-[50%] bg-green-400"></div>
        </div>

        <div className="crossButton px-[10%] py-[7%] hidden max-mb:flex max-mb:p-[5%] max-mb:z-[999] max-mb:relative">
        <button 
        onClick={() => {
          setVisible(!visible)
          setmainVisible(!mainVisible)
        }}
        ><X size={30}/></button>
        </div>

        <div className="two w-[90%] h-[90%] relative left-[50%] translate-x-[-50%] rounded-lg bg-[rgb(28,27,34)] pt-8 pl-[8%] m max-mb:p-0 max-mb:absolute max-mb:h-fit max-mb:w-fit max-mb:top-[50%] max-mb:translate-y-[-50%]">
          <div className="two-top h-fit w-full flex flex-col gap-8 mb-[34px] ml-[6%]">
            <Social
              name="Home"
              image={<Home size={24} color="#ffffff" />}
              link="/"
            />
            <Social
              name="Projects"
              image={<PanelsTopLeft size={24} color="#ffffff" />}
              link="/"
            />
          </div>

          <div className="two-dots">
            <h2 className="text-sm text-[rgb(139,138,144)] relative left-[4px] mb-[18px]">
              Socials
            </h2>
            <div className="h-fit w-full flex flex-col gap-8 mb-[24px] ml-[6%]">
              <Social
                name="Instagram"
                image={<Instagram color="#fc01d7" size={24} />}
                link="https://www.instagram.com/jay_pokharna/"
              />
              <Social
                name="Linkedin"
                image={<Linkedin color="#0a7bff" size={24} />}
                link="https://www.linkedin.com/in/jay-pokharna-940a42207"
              />
              <Social
                name="Github"
                image={<Github color="#d25639" size={24} />}
                link="https://github.com/jaypokharna"
              />
              <Social
                name="Twitter"
                image={<Twitter color="#00bfff" size={24} />}
                link="https://twitter.com/pokharnajay"
              />
            </div>
          </div>
        </div>
      </div> }
    </> 
  );
};

export default Leftbox;
