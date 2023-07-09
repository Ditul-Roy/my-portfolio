import React, { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import './contact.css'
import useTitleBar from '../../../Hooks/usetitle';

const Contact = () => {
    useTitleBar('contact')
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <div>
            <h1 className='text-3xl text-center text-bold my-10 text-white'>Contact with me</h1>
            <div className="lg:flex justify-between items-center rounded">
                <img className='ms-4 w-96 h-96' src="https://i.ibb.co/fCwFC7c/81732-contact-us.gif" alt="" data-aos='fade-down' />
                <div className="card-body" data-aos='fade-up'>
                    <div className="form-control">
                        <input type="text" placeholder="name" className="p-4 rounded" />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="email" className=" p-4 rounded" />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="mobile" className=" p-4 rounded" />
                    </div>
                    <textarea className="textarea textarea-bordered" placeholder="message"></textarea>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">submit</button>
                    </div>
                </div>
            </div>
            <p className='divider text-white'>OR</p>
            <div className='social flex gap-4 justify-evenly my-10'>
                <img src="https://i.ibb.co/6w33tqS/75975-facebook.gif" alt=""  data-aos='fade-right'/>
                <img src="https://i.ibb.co/yymdfvp/70339-twitter-logo-animation.gif" alt="" data-aos='fade-right' />
                <img src="https://i.ibb.co/rtJmtjB/76044-linkedin-icon.gif" alt=""  data-aos='fade-left'/>
                <img src="https://i.ibb.co/R9NcrjK/38760-instagram-logo-effect-1.gif" alt="" data-aos='fade-left' />
            </div>
        </div>
    );
};

export default Contact;