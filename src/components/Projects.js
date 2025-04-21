import React from 'react'

const Projects = () => {
    const projects=[
        {
            id:1,
            isrc:'/project_image/project1.png',
            dsrc:'https://weatherapp65.netlify.app/',
            csrc:'https://github.com/RohitPallewad/weather-App'
        },
        {
            id:2,
            isrc:'/project_image/project2.png',
            dsrc:'https://rohit-portfolio.netlify.app/',
            csrc:'https://github.com/RohitPallewad/Portfolio'
        }
    ]
    return (
        <div name='projects' className='bg-gradient-to-b from-black to-gray-800 w-full text-white'>
            <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full mb-10">
                <div className="pb-8">
                    <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-0 sm:px-0 mt-20 mb-20">
                    {projects.map(({id,isrc,dsrc,csrc})=>(
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={isrc} alt="" className=' rounded-md duration-200 hover:scale-105'/>
                            <div className='flex items-center justify-center'>
                                <button className=' w-1/2 m-4 duration-200 hover:scale-105'><a href={dsrc} className='px-6 py-3 block' target='_bank'>Demo</a></button>
                                <button className=' w-1/2 m-4 duration-200 hover:scale-105'><a href={csrc} className='px-6 py-3 block' target='_bank'>Code</a></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects