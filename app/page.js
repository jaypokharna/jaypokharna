'use client'
import React from 'react'
import Leftbox from './Components/Leftbox'
import Rightbox from './Components/Rightbox'
import { motion } from "framer-motion";


const page = () => {
  return (
    <>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 2 }} className="main w-[100vw] min-h-[100vh] h-auto overflow-auto bg-[rgb(20,19,25)]">
        <Leftbox/>
        <Rightbox/>
    </motion.div >
    </>
  )
}

export default page