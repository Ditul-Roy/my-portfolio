import React, { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import useTitleBar from '../../../Hooks/usetitle';

const About = () => {
    useTitleBar('about')
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <div className=" mt-20 bg-cyan-900 rounded-xl">
            <div className="lg:flex row-reverse">
                <div data-aos='fade-up'>
                    <img src="https://i.ibb.co/5Ys8dqg/pngegg-28.png" className="AboutImg" />
                </div>
                <div className='mx-20 mt-20' data-aos='fade-down'>
                    <h1 className="text-5xl mb-0 text-white font-bold text-center">About me</h1>
                    <p className='divider'></p>
                    <p className="pb-6 text-white text-xl text-justify"><span className='text-2xl text-blue-400'>Hi,</span>I am Ditul Roy. I am from Thakurgaon Bangladesh. I complete my HSC In 2021. After that I cannot admitted any collage or university. Recently I finished web development course and get big knowledge of programming. So, now I am a junior web developer. Any kind of work I always try to finished. </p>

                </div>
            </div>
        </div>
    );
};

export default About;