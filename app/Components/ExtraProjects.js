"use client";
import React, { useState } from "react";
import { Quote } from "lucide-react";
import { Link2 } from "lucide-react";
import { Box } from "lucide-react";
import { Puzzle } from "lucide-react";
import { motion } from "framer-motion";
import SideProjects from "./SideProjects";
import { MessageSquareMore } from 'lucide-react';

const ExtraProjects = () => {
  const [linkColor, setlinkColor] = useState("#ffffff");
  const [puzzleColor, setpuzzleColor] = useState("#ffffff");
  const [quoteColor, setquoteColor] = useState("#ffffff");
  const [boxColor, setboxColor] = useState("#ffffff");

  const url = (
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
  );

  const box = (
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
  );

  // const puzzle = (
  //   <Puzzle
  //     size={24}
  //     color={puzzleColor}
  //     onMouseEnter={(e) => {
  //       console.log(e);
  //       setpuzzleColor("#A855F7");
  //     }}
  //     onMouseLeave={(e) => {
  //       setpuzzleColor("#ffffff");
  //     }}
  //   />
  // );

  const chat = (
    <MessageSquareMore
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
  );

  const quote = (
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
  );

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
        className="extra-projects h-fit w-[32%] bg-[rgb(28,27,34)] px-6 py-8 max-mb:w-auto max-mb:mx-[4%] max-mb:h-auto max-mb:mb-4 max-mb:mt-2 max-mb:px-5"
      >
        <div className=" font-[500] text-xl max-mb:text-center">
          Other Projects
        </div>

        <div className="other-projects w-full h-[100%] pt-[12%] pb flex flex-col gap-6 max-mb:pt-[10%]">

          <SideProjects
            link={"https://github.com/jaypokharna/react-fluid-animation"}
            icon={chat}
            projectName={"Realtime Chat Application"}
            techUsed={"Socket.IO, JWT, ReactJS, NodeJS, ExpressJS "}
          />
          <SideProjects
            link={"https://github.com/jaypokharna/url-shortner"}
            icon={url}
            projectName={"URL Shortner"}
            techUsed={"NodeJS, ExpressJS, Mongoose, TailwindCSS"}
          />
          <SideProjects
            link={"https://github.com/jaypokharna/quoter"}
            icon={quote}
            projectName={"Quoter"}
            techUsed={"NodeJS, ExpressJS, NodeMailer, Node-cron, Session"}
          />
          <SideProjects
            link={"https://github.com/jaypokharna/cyber-fiction-website"}
            icon={box}
            projectName={"Cyber Fiction Website"}
            techUsed={"GSAP, Locomotive, TailwindCSS"}
          />
          {/* <SideProjects
            link={"https://github.com/jaypokharna/react-fluid-animation"}
            icon={puzzle}
            projectName={"Fluid Animation"}
            techUsed={"ReactJS, FramerMotion, TailwindCSS"}
          /> */}
        </div>
      </motion.div>
    </>
  );
};

export default ExtraProjects;
