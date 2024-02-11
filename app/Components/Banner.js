import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Linkedin } from 'lucide-react'

const Banner = () => {
  return (
    <>
    <div className="banner w-[100%] h-[21vh] relative bg-[url('/images/background.svg')] flex items-center px-9 justify-between">

        <div className='flex items-center gap-5 w-fit'>
            <Image
            src={"/images/dp.svg"}
            alt="Author's Picture"
            width={0}
            height={0}  
            className=' w-32 h-32 rounded-[50%] border-4 border-white'
            />
              <div className='w-fit'>
                <h2 className='whitespace-nowrap text-3xl font-bold'>Jay Pokharna</h2>
                <h2 className='font-thin text-white brightness-150'>@pokharnajay</h2>
              </div>
        </div>

        <div>
          <a href="/" className='flex gap-2 items-center text-sm w-fit bg-[rgb(20,19,25)] py-2 px-4 rounded-md brightness-50 hover:brightness-90  cursor-pointer'>
          <Linkedin color="#ffffff"/>
          Connect on Linkedin
          </a> 
        </div>

    </div>
    </>
  )
}

export default Banner