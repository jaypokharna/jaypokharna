import React from 'react'

const SkillsBoxes = () => {
  return (
    <>
        <div className="skills-boxes w-full h-[300px] px-6 relative top-8 max-mb:top-[100%] max-mb:block max-mb:h-[90vh] max-mb:px-[4%]">

           <div className="whatiknow  py-[2%] text-xl font-[500] max-mb:pb-6 max-mb:pt-0 max-mb:text-center max-mb:text-xl max-mb:font-semibold">
            What I know
           </div>

           <div className="skills w-full h-[100%] flex gap-4 justify-between pr-5 max-mb:flex-col max-mb:pr-0 max-mb:h-[90%]">

           <div className="flex-1 flex flex-col gap-4 p-4 rounded-md shadow-lg bg-[rgb(28,27,34)]">
                  <h2 className="text-primary font-medium text-lg">Frontend</h2>

                  <div className="flex flex-wrap gap-2">
                    <div
className=" bg-[rgb(20,19,25)] rounded-md text-xs text-primary p-2 border-[rgba(239,68,68,.6)] border-[1px] hover:bg-[rgba(239,68,68,.6)] hover:cursor-none">
                      HTML
                    </div>
                    <div
className=" bg-[rgb(20,19,25)] rounded-md text-xs text-primary p-2 border-[rgba(59,130,246,.6)] border-[1px] hover:bg-[rgba(59,130,246,.6)] hover:cursor-none">
                      CSS
                    </div>
                    <div
className=" bg-[rgb(20,19,25)] rounded-md text-xs text-primary p-2 border-[rgba(34,197,94,.6)] border-[1px] hover:bg-[rgba(34,197,94,.6)] hover:cursor-none">
                      Javascript
                    </div>
                    <div
className=" bg-[rgb(20,19,25)] rounded-md text-xs text-primary p-2 border-[rgba(168,85,247,.6)] border-[1px] hover:bg-[rgba(168,85,247,.6)] hover:cursor-none">
                      Tailwind
                    </div>
                    <div
className=" bg-[rgb(20,19,25)] rounded-md text-xs text-primary p-2 border-[rgba(239,68,68,.6)] border-[1px] hover:bg-[rgba(239,68,68,.6)] hover:cursor-none">
                      ReactJS
                    </div>
                    <div
className=" bg-[rgb(20,19,25)] rounded-md text-xs text-primary p-2 border-[rgba(34,197,94,.6)] border-[1px] hover:bg-[rgba(34,197,94,.6)] hover:cursor-none">
                      NextJS 13
                    </div>
                  </div>

                  
                </div>

                <div
                  className="flex-1 flex flex-col gap-4 p-4 rounded-md shadow-lg bg-[rgb(28,27,34)]"
                  
                >
                  <h2 className="text-primary font-medium text-lg">Backend</h2>
                  <div className="flex flex-wrap gap-2">
                    <div
                      className=" bg-[rgb(20,19,25)] rounded-md text-xs text-primary p-2 border-[rgba(34,197,94,.6)] border-[1px] hover:bg-[rgba(34,197,94,.6)] hover:cursor-none"
                    >
                      NodeJS
                    </div>
                    <div
                      className=" bg-[rgb(20,19,25)] rounded-md text-xs text-primary p-2 border-[rgba(168,85,247,.6)] border-[1px] hover:bg-[rgba(168,85,247,.6)] hover:cursor-none"
                    >
                      ExpressJS
                    </div>
                    <div
                      className=" bg-[rgb(20,19,25)] rounded-md text-xs text-primary p-2 border-[rgba(239,68,68,.6)] border-[1px] hover:bg-[rgba(239,68,68,.6)] hover:cursor-none"
                    >
                      Django
                    </div>
                    <div
                      className=" bg-[rgb(20,19,25)] rounded-md text-xs text-primary p-2 border-[rgba(59,130,246,.6)] border-[1px] hover:bg-[rgba(59,130,246,.6)] hover:cursor-none"
                    >
                      Flask
                    </div>
                  </div>
                </div>

                <div
                  className="flex-1 flex flex-col gap-4 p-4 rounded-md shadow-lg bg-[rgb(28,27,34)]"
                  
                >
                  <h2 className="text-primary font-medium text-lg">Database</h2>
                  <div className="flex flex-wrap gap-2">
                    <div
                      className=" bg-[rgb(20,19,25)] rounded-md text-xs text-primary p-2 border-[rgba(34,197,94,.6)] border-[1px] hover:bg-[rgba(34,197,94,.6)] hover:cursor-none"
                    >
                      MongoDB
                    </div>
                    <div
                      className=" bg-[rgb(20,19,25)] rounded-md text-xs text-primary p-2 border-[rgba(239,68,68,.6)] border-[1px] hover:bg-[rgba(239,68,68,.6)] hover:cursor-none"
                    >
                      MySQL
                    </div>
                    <div
                      className=" bg-[rgb(20,19,25)] rounded-md text-xs text-primary p-2 border-[rgba(168,85,247,.6)] border-[1px] hover:bg-[rgba(168,85,247,.6)] hover:cursor-none"
                    >
                      PostgreSQL
                    </div>
                  </div>
                </div>

                <div
                  className="flex-1 flex flex-col gap-4 p-4 rounded-md shadow-lg bg-[rgb(28,27,34)]"
                  
                >
                  <h2 className="text-primary font-medium text-lg">Devops</h2>
                  <div className="flex flex-wrap gap-2">
                    <div
                      className=" bg-[rgb(20,19,25)] rounded-md text-xs text-primary p-2 border-[rgba(239,68,68,.6)] border-[1px] hover:bg-[rgba(239,68,68,.6)] hover:cursor-none"
                    >
                      Docker
                    </div>
                    <div
                      className=" bg-[rgb(20,19,25)] rounded-md text-xs text-primary p-2 border-[rgba(34,197,94,.6)] border-[1px] hover:bg-[rgba(34,197,94,.6)] hover:cursor-none"
                    >
                      Kubernetes
                    </div>
                    <div
                      className=" bg-[rgb(20,19,25)] rounded-md text-xs text-primary p-2 border-[rgba(59,130,246,.6)] border-[1px] hover:bg-[rgba(59,130,246,.6)] hover:cursor-none"
                    >
                      Git
                    </div>
                    <div
                      className=" bg-[rgb(20,19,25)] rounded-md text-xs text-primary p-2 border-[rgba(168,85,247,.6)] border-[1px] hover:bg-[rgba(168,85,247,.6)] hover:cursor-none"
                    >
                      Postman
                    </div>
                  </div>
                </div>

           </div>

        </div>
    </>
  )
}

export default SkillsBoxes