import React from 'react';
import Banner from '../Banner/Banner';
import Skill from '../Skill/Skill';
import About from '../About/About';
import MySkills from '../MySkills/MySkills';
import Contact from '../Contact/Contact';
import Service from '../Service/Service';
import useTitleBar from '../../../Hooks/usetitle';

const Home = () => {
    useTitleBar('home')
    return (
        <div>
            <Banner></Banner>
            <Skill></Skill>
            <Service></Service>
            <About></About>
            <MySkills></MySkills>
            <Contact></Contact>
        </div>
    );
};

export default Home;