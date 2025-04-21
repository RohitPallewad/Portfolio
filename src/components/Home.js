import React from 'react'
import men from '../assets/banner.svg'
// import href from '.../public/resume/Rohit_Resume.pdf'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
// import {Link} from 'react-scroll'
const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 md:mt-8'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row pimp'>
            <div className='flex flex-col'>
                <h2 className='text-4xl sm:text-5xl md:text-7xl font-bold text-white'>I am Front-End Developer</h2>
                <p className='text-gray-200 py-4 max-w-md' >
                Hi , I am <b>Rohit Pallewad</b> 
                 </p>
                <div>
                <a href='/resume/Rohit_Resume.pdf' download target='_blank' className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                    Download CV
                    <span className='group-hover:rotate-90 duration-300 '>
                        <MdOutlineKeyboardArrowRight size={25} className=' ml-1'/>
                    </span>
                </a>
                </div>
            </div>
            <div className='md:pb-7'>
                {/* <img src={men} alt="my Profile" className='rounded-2xl mx-auto maximp m'/> */}
                <img src={men} alt="my Profile" className='rounded-2xl mx-auto maximp'/>
            </div>
        </div>
    </div>
    );
}
export default Home