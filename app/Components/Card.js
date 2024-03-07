import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'

const Card = (props) => {
  return (
    <>
    <motion.a  className='bg-white rounded-lg grid grid-rows-2 grid-flow-col gap-3'  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 2 }} href={props.link} target='_blank'>

      <div className="card-image rounded-t-lg bg-black  h-[55%] row-span-1">
      <Image src={props.image} className=" rounded-t-lg w-[500px]" alt='Project Card' width={256} height={256} priority={true} loading="eager"/>
      </div>

      <div className="info h-fit px-4 py-0 flex flex-col gap-2 max-mb:py-3 row-span-1">
        <div className='text-black text-md font-bold leading-5 max-mb:text-2xl'>{props.project}</div>
        <div className='text-black text-xs font-light leading-3 max-mb:text-sm w-[90%]'>{props.skills}</div>
      </div>

    </motion.a>
    </>
  )
}

export default Card