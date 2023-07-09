import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css'

const NavigationBar = () => {

    return (
        <div>
            <div className="navbar text-white bg-black bg-opacity-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About me</Link></li>
                            <li><Link to='/contact'>Contact me</Link></li>
                            <li><Link to='/project'>Projects</Link></li>
                            <li><Link to='/service'>Service</Link></li>
                            <li><Link to='/skills'>Skills</Link></li>
                            <li><a href='https://drive.google.com/file/d/1MmnF9HX6ly7GZon4eShDVrHvOmd3j29t/view?usp=sharing'>My resume</a></li>
                            <li><a href='https://drive.google.com/file/d/1HHH7orNAhmTN8Oj04IqAFWKZC5SZGqXu/view?usp=sharing'>My cover letter</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Ditul Roy</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About me</Link></li>
                        <li><Link to='/contact'>Contact me</Link></li>
                        <li><Link to='/project'>Projects</Link></li>
                        <li><Link to='/service'>Service</Link></li>
                        <li><Link to='/skills'>Skills</Link></li>
                        <li><a href='https://drive.google.com/file/d/1MmnF9HX6ly7GZon4eShDVrHvOmd3j29t/view?usp=sharing'>Resume</a></li>
                        <li><a href='https://drive.google.com/file/d/1HHH7orNAhmTN8Oj04IqAFWKZC5SZGqXu/view?usp=sharing'>CoverLetter</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/contact' className="btn">connect with me</Link>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;