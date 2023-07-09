import React, { useEffect } from 'react';
import './skill.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import useTitleBar from '../../../Hooks/usetitle';

const Skill = () => {
    useTitleBar('projects')
    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])
    return (
        <div className=''>
            <h2 className='text-3xl text-center text-bold text-gray-400'>My Projects</h2>
            <div className='projects grid lg:grid-cols-3 my-10 gap-10'>
                <div className='project-container'
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <div className='hoverIeffect'>
                        <img src="https://i.ibb.co/YXykSjW/Screenshot-12.png" alt="" />
                        <img src="https://i.ibb.co/c85Y5xY/Screenshot-15.png" alt="" />
                        <img src="https://i.ibb.co/DpLq88s/Screenshot-16.png" alt="" />
                        <img src="https://i.ibb.co/58FTk3d/Screenshot-13.png" alt="" />
                    </div>
                    <div className='project-Content'>
                        <h1 className='text-2xl text-center my-4'>food house</h1>
                        <p className='px-4 py-4'>The website created for resturent about chef and servive.In this header area iam added a background image on over some text and add marqee and menubar on the header and add footer.am added three section on homepage with main area like our facility, our chef and our service section with image, name details, rating etc.In this website im add login and signup components with authentication like this email and password authenticatio, google authentication, github authentication. On that pages add password validation, toggle with login signup.</p>
                        <h4 className='ms-4'>Please visit my:</h4>
                        <a href="https://chef-recipe-website-b3e16.web.app/chef"><button>live site</button></a>
                        <a href="https://github.com/Ditul-Roy/food-house-client"><button>client</button></a>
                        <a href="https://github.com/Ditul-Roy/food-house-server"><button>server</button></a>
                        <button>learn more</button>
                    </div>
                </div>
                <div className='project-container'
                    data-aos="fade-down"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine">
                    <div className='hoverIeffect'>
                        <img src="https://i.ibb.co/myhjJmD/Screenshot-7.png" alt="" />
                        <img src="https://i.ibb.co/CJ0Wchj/Screenshot-9.png" alt="" />
                        <img src="https://i.ibb.co/8ct9skD/Screenshot-10.png" alt="" />
                        <img src="https://i.ibb.co/54jDW8w/Screenshot-8.png" alt="" />
                    </div>
                    <div className='project-Content'>
                        <h1 className='text-2xl text-center my-4'>kids zone</h1>
                        <p className='px-4 py-4'>This website i will create some car toy for kids.I will give to the all page with navbar and footer without error page.In the allcars page i will add some defaul products and when any user add any product then he`s/her product add this page.I will add some private page there have i try to implement when user is log in then show this page.In the private page of my cars page if user add some cars and then only show he`s/her added products/cars and anytime he/she went to update/delete he / her product/cars.</p>
                        <h4 className='ms-4'>Please visit my:</h4>
                        <a href="https://kids-car-zone.web.app/"><button>live site</button></a>
                        <a href="https://github.com/Ditul-Roy/kids-zone-client"><button>client</button></a>
                        <a href="https://github.com/Ditul-Roy/kids-zone-server"><button>server</button></a>
                        <button>learn more</button>
                    </div>
                </div>
                <div className='project-container'
                    data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <div className='hoverIeffect'>
                        <img src="https://i.ibb.co/FbNqfqW/Screenshot-2.png" alt="" />
                        <img src="https://i.ibb.co/B2yvC7Q/Screenshot-1.png" alt="" />
                        <img src="https://i.ibb.co/g4KHbKS/Screenshot-3.png" alt="" />
                        <img src="https://i.ibb.co/TwzbxgX/Screenshot-5.png" alt="" />
                    </div>
                    <div className='project-Content'>
                        <h1 className='text-2xl text-center my-4'>stepUp dance club</h1>
                        <p className='px-4 py-4'>This website site i try to make a dance learning school, in this website for only dance realated work. There have three categories of user.First time i am tryng to create conditionally private route for different category of route. like if user is an admin. go to admin route, if user is instructor go to instructor route by default user go to student route.I am create instructor page, class page, dashboard profile and login or logout created to conditionally and created an errorpage.In this website I am using some library like react-hook-form, motion framer, react icons etc.</p>
                        <h4 className='ms-4'>Please visit my:</h4>
                        <a href=" https://stepup-dance-club.web.app"><button>live site</button></a>
                        <a href="https://github.com/Ditul-Roy/stepup-dance-client"><button>client</button></a>
                        <a href="https://github.com/Ditul-Roy/stepUp-dance-server"><button>server</button></a>
                        <button>learn more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;