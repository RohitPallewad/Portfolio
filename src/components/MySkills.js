import React from 'react'
import htmli from "../assets/htmli.png"
import css from "../assets/css.png"
import js from "../assets/js.png"
import react from "../assets/react.png"
import tailwind from "../assets/tailwind.png"
import sql from "../assets/sql.png"
import python from "../assets/python.png"
import manualtesting from "../assets/manualtesting.png"
import github from "../assets/github.png"

const MySkills = () => {
    const myskills=[
        {
            id:1,
            src: htmli,
            title:'HTML',
            style:'shadow-orange-500',
        },
        {
            id:2,
            src: css,
            title:'CSS',
            style:'shadow-blue-500',
        },
        {
            id:3,
            src:js,
            title:'JavaScript',
            style:'shadow-yellow-500',
        },
        {
            id:4,
            src: react,
            title:'React',
            style:'shadow-blue-600',
        },
        {
            id:5,
            src:tailwind,
            title:'tailwind',
            style:'shadow-sky-400',
        },
        {
            id:6,
            src:sql,
            title:'SQL',
            style:'shadow-white',
        },
        {
            id:7,
            src:github,
            title:'GitHub',
            style:'shadow-blue-800',
        },
        {
            id:8,
            src:python,
            title:'Python',
            style:'shadow-gray-400',
        },
        {
            id:9,
            src:manualtesting,
            title:'Manual Testing',
            style:'shadow-orange-500',
        },
    ]
    return (
        <div name='myskills' className=' bg-gradient-to-b from-gray-800 to-black w-full'>
        <div className=" max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white mt-14">
            <div className="">
                <p className=' text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>My Skills</p>
                <p className=' py-6'>These are the technologies I've worked With</p>
            </div>
            <div className=' w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {myskills.map(({id,src,title,style})=>(
                    <div key={id} className={'shadow-md hover:scale-105 duration-500 py-2 rounded-lg '+style}>
                        <img src={src} alt="" className={'w-20 mx-auto'}/>
                        <p className=' mt-4'>{title}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default MySkills