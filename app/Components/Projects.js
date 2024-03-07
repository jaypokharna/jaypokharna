import React from "react";
import Card from "./Card";

const Projects = () => {
  return (
    <>
      <div className="projects relative py-6 px-[4%] w-full h-fit flex flex-col gap-8 max-mb:h-auto max-mb:gap-0">
        <div className="text-xl font-semibold max-mb:text-center max-mb:pb-6">
          Projects
        </div>

        <div className="cards flex gap-4 justify-between h-fit max-mb:flex-col max-mb:h-auto">
          <Card
            project="Pinterest Clone"
            image="/images/pint3.jpeg"
            skills="Axios, ExpressJS, NodeJS, MongoDB, TailwindCSS"
            link="https://github.com/jaypokharna/Pinterest-Clone"
          />
          <Card
            project="CodeLive-Collaborative Coding Platform"
            image="/images/code3.jpeg"
            skills="Socket.IO, ReactJS, ExpressJS, NodeJS, TailwindCSS"
            link="https://github.com/jaypokharna/CodeLive"
          />
          <Card
            project="Apple Vision Pro"
            image="/images/apple3.jpeg"
            skills="GSAP Framework, Locomotive, TailwindCSS"
            link="https://github.com/jaypokharna/Apple-Vision-Pro"
          />
          <Card
            project="ChatGPT Clone"
            image="/images/chatgpt4.jpeg"
            skills="OpenAI, Python, Django, HTML, JavaScript, TailwindCSS"
            link="https://github.com/jaypokharna/ChatGPT"
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
