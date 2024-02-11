import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Projects from './Projects'
import Skills from './Skills'


const Rightbox = () => {
  return (
    <>
    <div className="rightmain w-[78%] h-[100%] relative ml-[22%] overflow-x-hidden max-mb:ml-0 max-mb:w-[100%] max-mb:flex max-mb:flex-col max-mb:gap-10">
    <Navbar/>
    <Banner/>
    <Projects/>
    <Skills/>

    </div>
    </>
  )
}

export default Rightbox