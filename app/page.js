'use client'
import React, { useState } from 'react'
import Leftbox from './Components/Leftbox'
import Rightbox from './Components/Rightbox'
import { motion } from "framer-motion";


const page = () => {

const [visible, setVisible] = useState(false)
const [mainVisible, setmainVisible] = useState(true)

  return (
    <>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 2 }} className="main w-[100%] min-h-[100vh] overflow-auto bg-[rgb(20,19,25)] overflow-x-hidden max-mb:block max-mb:h-auto">
    <Leftbox visible={visible} setVisible={setVisible} mainVisible={mainVisible} setmainVisible={setmainVisible} /> 
    
        {mainVisible && <Rightbox visible={visible} setVisible={setVisible} mainVisible={mainVisible} setmainVisible={setmainVisible} />}
    </motion.div >
    </>
  )
}

export default page