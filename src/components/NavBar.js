import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
    const [nav, setNav]=useState(false);    
    const links=[
        {
            id:1,
            link:"home",
            offset:0,
        },
        {
            id:2,
            link:"about",
            offset:-80,
        },
        {
            id:3,
            link:"projects",
            offset:-80,
        },
        {
            id:4,
            link:"myskills",
            offset:-30,
        },
        {
            id:5,
            link:"contact",
            offset:-30,
        },
    ];
    
  return (

    <div className='flex justify-between items-center w-full h-20 text-white bg-black fixed px-4'>
        <div>
            <h1 className=' text-5xl font-signature ml-2'>Rohit</h1>
        </div>
        <ul className='hidden md:flex'>

            {links.map(({id,link,offset})=>(
                <li key={id} className={'px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'}>
                    <Link to={link} smooth duration={500} offset={offset} className='scroll-mt-8'>{link}</Link>
                </li>
            ))}

        </ul>
        <div onClick={()=>setNav(!nav)} className=' cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
            {nav ? <FaTimes size={30}/>:<FaBars size={30}/>}
        </div>

        {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
            {links.map(({id,link,offset})=>(
                    <li key={id} className={'px-4 cursor-pointer capitalize py-6 text-4xl'}>
                        <Link onClick={()=>setNav(!nav)} to={link} offset={offset} smooth duration={500}>{link}</Link>
                    </li>
                ))}
            </ul>
        )}
    </div>
  )
}

export default NavBar