import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Linkedin } from 'lucide-react'

const Banner = () => {
  return (
    <>
    <div className="banner w-[100%] h-[21vh] relative bg-[url('/images/background.svg')] flex items-center px-9 justify-between max-mb:h-auto max-mb:px-5 max-mb:justify-center">

        <div className='flex items-center gap-5 w-fit max-mb:gap-3 max-mb:my-[4%]'>
            <Image
            src={"/images/dp.svg"}
            alt="Author's Picture"
            width={0}
            height={0}  
            priority={true} loading="eager"
            className=' w-32 h-32 rounded-[50%] border-4 border-white max-mb:w-[105px] max-mb:h-[105px]'
            />
              <div className='w-fit'>
                <h2 className='whitespace-nowrap text-3xl font-bold max-mb:text-3xl'>Jay Pokharna</h2>
                <h2 className='font-thin text-white brightness-150 max-mb:text-lg'>@pokharnajay</h2>
              </div>
        </div>

        <div className='max-mb:hidden'>
          <a href="https://www.linkedin.com/in/jay-pokharna-940a42207" className='flex gap-2 items-center text-sm w-fit bg-[rgb(20,19,25)] py-2 px-4 rounded-md brightness-50 hover:brightness-90  cursor-pointer' target='_blank'>
          <Linkedin color="#ffffff"/>
          Connect on Linkedin
          </a> 
        </div>

    </div>
    </>
  )
}

export default Banner