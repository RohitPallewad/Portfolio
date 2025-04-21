import React from 'react'
import {CiCoffeeCup} from "react-icons/ci";

const About = () => {
  return (
    <div name='about' className='w-full bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>
          <div className="pb-8">
            <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
          </div>
        <p className=' text-xl mt-10'>
        Hi, my name is <b>Rohit Pallewad</b> and I'm from Umarkhed.
            I'm a <b>Developer</b> and completed <b>MCA</b> from Vivekanand Education Society's Institute of Technology, Mumbai. I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/><br></br>
            Apart from coding I love playing chess. 
        </p>
        <br />
        <p className=' text-xl mb-20'>
        I love the process of changing a raw idea into a website or a product that impacts lives. 
            I want to do work that challenges me as a developer & work that I can be proud of.<br /><br />
            I am person that adapts quickly in a fastly - changing environment and I am always wiling to learn new technologies.
            My skills are <b> Python </b> and know a bit of <b>Java</b> and I am working on a few 
            projects in the <b>React.Js.</b>I plan to learn <b>Next.js</b>, and<b> Typescript</b> in the near future. <br /><br />
            Also, I love <b>coffee <CiCoffeeCup className=' inline-block -z-10' style={{scale:"2.0", rotate:"15deg" }}/>   
        </b>
        </p>
      </div>
    </div>
  )
}

export default About