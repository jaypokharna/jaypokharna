'use client'
import React from 'react'
import Leftbox from './Components/Leftbox'
import Rightbox from './Components/Rightbox'
import { motion } from "framer-motion";


const page = () => {
  return (
    <>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 2 }} className="main w-[100%] min-h-[100vh] overflow-auto bg-[rgb(20,19,25)] overflow-x-hidden max-mb:block max-mb:h-">
        <Leftbox/>
        <Rightbox/>
    </motion.div >
    </>
  )
}

export default page