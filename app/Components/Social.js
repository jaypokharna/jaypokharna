import React, { useContext } from 'react'
import { motion } from 'framer-motion'

const Social = (props) => {

  return (
    <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 2 }} href={props.name==="Resume" ? "/data/Jay%20Pokharna%20Resume.pdf" : props.link} className="icon-one flex gap-3 w-full items-center cursor-pointer hover:-translate-y-1 hover:transition-all duration-200  text-white" dowmload target={props.name === "Home" || props.name === "Projects" ? null : "_blank"}    >
            {props.image}
            <h2 className="text-sm text-[rgb(139,138,144)] max-mb:text-2xl">{props.name}</h2>
          </motion.a>
  )
}

export default Social