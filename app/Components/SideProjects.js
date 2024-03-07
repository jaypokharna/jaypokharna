import React from 'react'
import { ChevronRight } from "lucide-react";

const SideProjects = ({link , icon , projectName , techUsed}) => {
  return (
    <a href={link} className="flex cursor-pointer">
            <div className="flex-1 flex items-center gap-3">
              <div>
                {icon}
              </div>
              <div>
                <div className="text-white mb-1  leading-5 text-[14px] font-semibold">
                 {projectName}
                </div>
                <div className="text-white font-light text-xs">
                  {techUsed}
                </div>
              </div>
              <div>
                <ChevronRight
                  size={20}
                  color="#ffffff"
                  className="hover:translate-x-1 transition-all duration-200 ease-in-out"
                />
              </div>
            </div>
          </a>
  )
}

export default SideProjects