import React, { useEffect, useRef } from 'react';
import './banner.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Typed from 'typed.js';

const Banner = () => {

    useEffect(() => {
        const typed = new Typed('.moreText', {
          strings: ['JUNIOR FRONTEND DEVELOPER','REACT DEVELOPER','MERN STACK DEVELOPER'],
          typeSpeed: 30,
          backSpeed: 30,
          backDelay: 2000,
          loop: true
        });
    })
    useEffect(()=>{
        AOS.init({duration: 2000})
    },[])
    return (
        <div>
            <div className="hero">
                <div className=""></div>
                <div className="text-neutral-content lg:flex lg:justify-evenly my-4">
                    <div className='lg:mt-10 mx-4 mt-24'>
                        <h1 className="mb-5 text-3xl font-bold"  data-aos='fade-left'><br/> i am <span className='text-6xl text-blue-400'>Ditul Roy</span></h1>
                        <p className='text-3xl' data-aos='zoom-out-down'>I am a <span className='moreText'></span></p>
                        <p className='lg:me-48 my-4 text-xl text-gray-400 text-justify' data-aos='fade-right' >I am from Thakurgaon Bangladesh. I complete my HSC In 2021. After that I cannot admitted any collage or university. Recently I finished web development course and get big knowledge of programming. So, now I am a junior web developer. Any kind of work I always try to finished. I have created some Projects at different categories. I have to know some technologies like HTML, CSS, Tailwind, Javasript, React, Nodejs, MongoDB and some tools like vs code, firebase, github, vercel etc. </p>
                        <a href='../../../../public/Ditul4Resume.pdf' className='btn btn-outline btn-warning border-0 shadow-4 border-b-2' download={'ditulResume'}>download resume</a>
                    </div>
                    <div data-aos='zoom-in-up'>
                        <img className='bannerimg' src='https://i.ibb.co/5Ys8dqg/pngegg-28.png' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;