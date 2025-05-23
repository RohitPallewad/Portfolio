import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail} from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"

const SocialLinks = () => {
    const link = [
        {
            id:1,
            child:(
                <>
                    LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href:'https://www.linkedin.com/in/rohit-pallewad-394945220/',
            style: 'rounded-tr-md'
        },
        {
            id:2,
            child:(
                <>
                    Github <FaGithub size={30}/>
                </>
            ),
            href:'https://github.com/RohitPallewad'
        },
        {
            id:3,
            child:(
                <>
                    Mail <HiOutlineMail size={30}/>
                </>
            ),
            href:'mailto:rohitpallewad01@gmail.com',
        },
        {
            id:4,
            child:(
                <>
                    Resume <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href:'/resume/Rohit_Resume.pdf',
            style: 'rounded-br-md',
            download:'rohit_resume',
        }
    ]
    return (
    <div className=' hidden lg:flex flex-col top-[35%] fixed'>
        <ul>
            {link.map(({id,child,href,style,download})=>(
                <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 '+ style}>
                    <a href={href} className='flex justify-between items-center w-full text-white' download={download} target='_blank' rel="noreferrer">
                        {child}
                    </a>    
                </li>
            ))}
        </ul>
    </div>
  )
}
export default SocialLinks