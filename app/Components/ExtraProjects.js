"use client";
import React, { useState } from "react";
import { Quote } from "lucide-react";
import { Link2 } from "lucide-react";
import { Box } from "lucide-react";
import { Puzzle } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const ExtraProjects = (props) => {
  const [linkColor, setlinkColor] = useState("#ffffff");
  const [puzzleColor, setpuzzleColor] = useState("#ffffff");
  const [quoteColor, setquoteColor] = useState("#ffffff");
  const [boxColor, setboxColor] = useState("#ffffff");

  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 2 }} className="extra-projects h-fit w-[32%] bg-[rgb(28,27,34)] px-6 py-8 max-mb:w-auto max-mb:mx-[4%] max-mb:h-auto max-mb:mb-3">
        <div className=" font-[500] text-xl max-mb:text-center">Other Projects</div>
        <div className="other-projects w-full h-[100%] pt-[12%] pb flex flex-col gap-6">

          <a href="https://github.com/jaypokharna/url-shortner"
            className="flex cursor-pointer"
          >
            <div className="flex-1 flex items-center gap-3">
              <div>
                <Link2
                  size={24}
                  color={linkColor}
                  onMouseEnter={() => {
                    setlinkColor("#EF4444");
                  }}
                  onMouseLeave={(e) => {
                    setlinkColor("#ffffff");
                  }}
                />
              </div>
              <div>
                <div className="text-white mb-1  leading-5 text-[14px] font-semibold">
                  URL Shortner
                </div>
                <div className="text-white font-light text-xs">
                  NodeJS, ExpressJS, Mongoose, TailwindCSS
                </div>
              </div>
              <div>
                <ChevronRight
                  size={20}
                  color="#ffffff"
                  className="hover:translate-x-1 transition-all duration-200 ease-in-out"
                />
              </div>
            </div>
          </a>

          <a href="https://github.com/jaypokharna/quoter"
            className="flex cursor-pointer"
          >
            <div className="flex-1 flex items-center gap-3">
              <div>
                <Quote
                  size={24}
                  color={quoteColor}
                  onMouseEnter={(e) => {
                    setquoteColor("#3B82F6");
                  }}
                  onMouseLeave={(e) => {
                    setquoteColor("#ffffff");
                  }}
                />
              </div>
              <div>
                <div className="text-white mb-1  leading-5 text-[14px] font-semibold">
                  Quoter
                </div>
                <div className="text-white font-light text-xs">
                  NodeJS, ExpressJS, NodeMailer, Node-cron, Session
                </div>
              </div>
              <div>
                <ChevronRight
                  size={20}
                  color="#ffffff"
                  className="hover:translate-x-1 transition-all duration-200 ease-in-out"
                />
              </div>
            </div>
          </a>

          <a href="https://github.com/jaypokharna/cyber-fiction-website"
            className="flex cursor-pointer"
          >
            <div className="flex-1 flex items-center gap-3">
              <div>
                <Box
                  size={24}
                  color={boxColor}
                  onMouseEnter={(e) => {
                    setboxColor("#22C55E");
                  }}
                  onMouseLeave={(e) => {
                    setboxColor("#ffffff");
                  }}
                />
              </div>
              <div>
                <div className="text-white mb-1  leading-5 text-[14px] font-semibold">
                  Cyber Fiction Website
                </div>
                <div className="text-white font-light text-xs">
                  GSAP, Locomotive, TailwindCSS
                </div>
              </div>
              <div>
                <ChevronRight
                  size={20}
                  color="#ffffff"
                  className="hover:translate-x-1 transition-all duration-200 ease-in-out"
                />
              </div>
            </div>
          </a>

          <a href="" className="flex cursor-pointer">
            <div className="flex-1 flex items-center gap-3">
              <div>
                <Puzzle
                  size={24}
                  color={puzzleColor}
                  onMouseEnter={(e) => {
                    console.log(e);
                    setpuzzleColor("#A855F7");
                  }}
                  onMouseLeave={(e) => {
                    setpuzzleColor("#ffffff");
                  }}
                />
              </div>
              <div>
                <div className="text-white mb-1  leading-5 text-[14px] font-semibold">
                  Fluid Animation
                </div>
                <div className="text-white font-light text-xs">
                  ReactJS, FramerMotion, TailwindCSS
                </div>
              </div>
              <div>
                <ChevronRight
                  size={20}
                  color="#ffffff"
                  className="hover:translate-x-1 transition-all duration-200 ease-in-out"
                />
              </div>
            </div>
          </a>

        </div>
      </motion.div>
    </>
  );
};

export default ExtraProjects;
