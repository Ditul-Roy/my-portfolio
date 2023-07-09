import React, { useEffect } from 'react';
import './service.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaCode, FaHtml5 } from 'react-icons/fa';
import useTitleBar from '../../../Hooks/usetitle';

const Service = () => {
    useTitleBar('service')
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <div>
            <h2 className='text-3xl text-center text-bold text-gray-400 '>My Services</h2>
            <div className='lg:flex lg:justify-evenly bg-cyan-900 rounded my-4 p-10'>
                <div className='web text-white p-10 rounded' data-aos='fade-right'>
                    <FaHtml5 className='text-6xl'></FaHtml5>
                    <h1 className='text-4xl text-blue-400'>web design</h1>
                    <p className='text-xl text-blue-200 text-justify'>Usually i am a web developer. But sometime i need to design the website for any other perpose. So that, I am junior web design and developer. If I see website template in figma or phd, then I always try to create website with no different with figma.</p>
                </div>
                <div className='web text-white p-10 rounded' data-aos='fade-left'>
                    <FaCode className='text-6xl'></FaCode>
                    <div className=''>
                        <h1 className='text-4xl text-blue-400'>web development</h1>
                        <p className='text-xl text-blue-200 text-justify'>I am a web developer. I get the web development knowledge on a course. At first I have no idea on web development. Then I learn this and do hard work on 6month and achieved big knowledge on web development. Now I am professionally web developer.   </p>
                    </div>
                </div>
                <div>
                    <h1></h1>
                </div>
            </div>
        </div>
    );
};

export default Service;