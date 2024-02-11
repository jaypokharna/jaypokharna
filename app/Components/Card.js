import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'

const Card = (props) => {
  return (
    <>
    <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 2 }} href={props.link} className=' bg-white rounded-lg'>

      <div className="card-image rounded-t-lg bg-black  h-[55%]">
      <Image src={props.image} className="rounded-t-lg h-[100%] w-[500px]" width={256} height={256} />
      </div>

      <div className="info px-4 py-5 flex flex-col gap-1">
        <div className='text-black text-lg font-bold leading-5'>{props.project}</div>
        <div className='text-black text-xs font-light leading-3'>{props.skills}</div>
      </div>

    </motion.a>
    </>
  )
}

export default Card