import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../Pages/Home/NavigationBar/NavigationBar';
import Footer from '../Pages/Home/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;