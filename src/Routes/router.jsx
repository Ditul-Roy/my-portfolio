import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Skill from "../Pages/Home/Skill/Skill";
import Service from "../Pages/Home/Service/Service";
import About from "../Pages/Home/About/About";
import MySkills from "../Pages/Home/MySkills/MySkills";
import Contact from "../Pages/Home/Contact/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/project',
                element: <Skill></Skill>
            },
            {
                path: '/service',
                element: <Service></Service>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/skills',
                element: <MySkills></MySkills>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    }
])

export default router;