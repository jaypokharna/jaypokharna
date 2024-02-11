import { Cardo } from 'next/font/google'
import React from 'react'
import Card from './Card'

const Projects = () => {
  return (
    <>
    <div className="projects relative py-6 px-[4%] w-full flex flex-col gap-8">

        <div className='text-xl font-semibold'>Projects</div>

        <div className='cards flex gap-4 justify-between h-[240px]'>

        <Card project="Pinterest Clone" image="/images/pint3.jpeg" skills="ExpressJS, NodeJS, MongoDB, TailwindCSS" link="https://github.com/jaypokharna/Pinterest-Clone"/>
              <Card project="CodeLive-Collaborative Coding Platform" image="/images/code3.jpeg" skills="ReactJS, ExpressJS, NodeJS, MongoDB, TailwindCSS, Web
                    Sockets" link="https://github.com/jaypokharna/CodeLive"/>
              <Card project="Apple Vision Pro" image="/images/apple3.jpeg" skills="GSAP Framework, Locomotive, TailwindCSS" link="https://github.com/jaypokharna/Apple-Vision-Pro"/>
              <Card project="ChatGPT Clone" image="/images/chatgpt4.jpeg" skills="OpenAI, Python, Django, HTML, JavaScript, TailwindCSS" link="https://github.com/jaypokharna/ChatGPT"/>


        </div>

    </div>
    </>
  )
}

export default Projects