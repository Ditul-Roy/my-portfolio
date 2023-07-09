import React, { useEffect } from 'react';
import { FaBootstrap, FaCode, FaCss3, FaGit, FaGithub, FaHtml5, FaNode, FaReact } from 'react-icons/fa';
import AOS from 'aos'
import 'aos/dist/aos.css'
import './myskill.css'
import useTitleBar from '../../../Hooks/usetitle';

const MySkills = () => {
    useTitleBar('myskills')
    useEffect(()=>{
        AOS.init({duration: 2000})
    },[])
    return (
        <div className='my-4 '>
            <h2 className='text-3xl text-center text-bold text-gray-400'>My Skills</h2>
            <div className=' lg:ps-20 px-10 py-10 rounded-xl grid lg:grid-cols-4 grid-cols-2 gap-4 my-4 mySkill' data-aos='fade-up'>
                <div className='bg-gray-400 lg:w-48 lg:h-40 text-white rounded-xl html' data-aos='fade-right'>
                    <FaHtml5 className='text-6xl mt-10 mx-auto text-center'></FaHtml5>
                    <h1 className='text-center text-2xl'>html</h1>
                </div>
                <div className='bg-gray-400 lg:w-48 lg:h-40 text-white rounded-xl' data-aos='fade-right'>
                   <FaCss3 className='text-6xl mt-10 mx-auto text-center'></FaCss3>
                    <h1 className='text-center text-2xl'>css3</h1>
                </div>
                <div className='bg-gray-400 lg:w-48 lg:h-40 text-white rounded-xl' data-aos='fade-left'>
                   <FaBootstrap className='text-6xl mt-10 mx-auto text-center'></FaBootstrap>
                    <h1 className='text-center text-2xl'>Bootstrap</h1>
                </div>
                <div className='bg-gray-400 lg:w-48 lg:h-40 text-white rounded-xl' data-aos='fade-left'>
                   <img src="https://i.ibb.co/r7rw5XH/pngegg-2.png" className='w-14 h-14 mt-10 mx-auto text-center' alt="" />
                    <h1 className='text-center text-2xl'>Javascript</h1>
                </div>
                <div className='bg-gray-400 lg:w-48 lg:h-40 text-white rounded-xl' data-aos='fade-right'>
                   <FaReact className='text-6xl mt-10 mx-auto text-center'></FaReact>
                    <h1 className='text-center text-2xl'>React</h1>
                </div>
                <div className='bg-gray-400 lg:w-48 lg:h-40 text-white rounded-xl' data-aos='fade-right'>
                   <FaNode className='text-6xl mt-10 mx-auto text-center'></FaNode>
                    <h1 className='text-center text-2xl'>Node</h1>
                </div>
                <div className='bg-gray-400 lg:w-48 lg:h-40 text-white rounded-xl' data-aos='fade-left'>
                   <img src="https://i.ibb.co/gv54VbR/pngegg.png" className='w-14 h-14 mt-10 mx-auto text-center' alt="" />
                    <h1 className='text-center text-2xl'>Express</h1>
                </div>
                <div className='bg-gray-400 lg:w-48 lg:h-40 text-white rounded-xl' data-aos='fade-left'>
                   <img src="https://i.ibb.co/BnFV770/pngegg-1.png" className='w-14 h-14 mt-10 mx-auto text-center' alt="" />
                    <h1 className='text-center text-2xl'>MongoDB</h1>
                </div>
                <div className='bg-gray-400 lg:w-48 lg:h-40 text-white rounded-xl' data-aos='fade-right'>
                   <FaGithub className='text-6xl mt-10 mx-auto text-center'></FaGithub>
                    <h1 className='text-center text-2xl'>Github</h1>
                </div>
                <div className='bg-gray-400 lg:w-48 lg:h-40 text-white rounded-xl' data-aos='fade-right'>
                   <FaGit className='text-6xl mt-10 mx-auto text-center'></FaGit>
                    <h1 className='text-center text-2xl'>Git</h1>
                </div>
                <div className='bg-gray-400 lg:w-48 lg:h-40 text-white rounded-xl' data-aos='fade-left'>
                   <img src="https://i.ibb.co/JjB5CcG/pngegg-3.png" className='w-14 h-14 mt-10 mx-auto text-center' alt="" />
                    <h1 className='text-center text-2xl'>firebase</h1>
                </div>
                <div className='bg-gray-400 lg:w-48 lg:h-40 text-white rounded-xl' data-aos='fade-left'>
                   <FaCode className='text-6xl mt-10 mx-auto text-center'></FaCode>
                    <h1 className='text-center text-2xl'>code</h1>
                </div>
            </div>
        </div>
    );
};

export default MySkills;