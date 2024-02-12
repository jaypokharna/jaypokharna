'use client'
import React, { useEffect, useState } from 'react'
import Leftbox from './Components/Leftbox'
import Rightbox from './Components/Rightbox'
import { motion } from "framer-motion";


const page = () => {

const [visible, setVisible] = useState(false)
const [mainVisible, setmainVisible] = useState(true)

// if(window.innerWidth < 431){
//   console.log("on a mobile device")
//   setVisible(false)
// }

useEffect(() => {
  if (window.innerWidth < 431) {
    setVisible(false);
  } else {
    setVisible(true);
  }

  return () => {
  }
}, [])


// useEffect(() => {

//     if (window.innerWidth < 431) {
//       setVisible(false);
//     } else {
//       setVisible(true);
//     }
//   };

// //   // Add event listener for window resize
// //   window.addEventListener('resize', handleResize);

// //   // Clean up event listener on component unmount
// //   return () => {
// //     window.removeEventListener('resize', handleResize);
// //   };
// }, []); // Empty dependency array ensures effect runs only once


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