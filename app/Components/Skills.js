import React from 'react'
import SkillsBoxes from './SkillsBoxes'
import ExtraProjects from './ExtraProjects'
import { motion } from 'framer-motion'

const Skills = () => {
  return (
   <>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 2 }} className="skills w-full px-[3%] py-[3%] flex justify-between max-mb:flex-col max-mb:p-0">
        
        <SkillsBoxes/>
        <ExtraProjects/>

    </motion.div>
   </>
  )
}

export default Skills