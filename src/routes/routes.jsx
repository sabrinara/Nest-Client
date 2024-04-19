
import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import ErrorPage from '../layout/ErrorPage';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PrivateRouters from './PrivateRoutes';

import About from '../components/About';
import Contact from '../components/Contact';
import Service from '../pages/Service';
import ManageServices from '../pages/ManageServices';
import MySchedules from '../pages/MySchedules';
import ServiceDetails from '../components/Service/ServiceDetails';
import AddService from '../pages/AddService';
import UpdateService from '../pages/UpdateService';
import Pending from '../pages/Pending';
import Profile from '../components/Profile';


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () =>  fetch('https://nest-backend-iota.vercel.app/services')
            },
            {
                path: '/about',
                element: <PrivateRouters><About></About></PrivateRouters>,
                
            },
            {
                path: '/contact',
                element: <PrivateRouters><Contact></Contact></PrivateRouters>,
            
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: "/register",
                element:<Register></Register>
            },
            {
                path:"/service",
                element:<PrivateRouters><Service></Service></PrivateRouters>
            },
            {
                path:"/addservice",
                element:<PrivateRouters><AddService></AddService></PrivateRouters>
                
            },
            {
                path:"/bookings",
                element:<PrivateRouters><MySchedules></MySchedules> </PrivateRouters>
            },
            {
                path:"/profile",
                element:<PrivateRouters><Profile></Profile></PrivateRouters>
            },
            {
                path:"/manageservices",
                element:<PrivateRouters><ManageServices></ManageServices></PrivateRouters>
            },
           
            {
                path:"/updateservice/:id",
                element:<PrivateRouters><UpdateService></UpdateService></PrivateRouters>
            },
            {
                path: "/servicedetails/:id",
                element: <PrivateRouters><ServiceDetails></ServiceDetails></PrivateRouters>,
            },
            {
                path: "/pending",
                element:<PrivateRouters><Pending></Pending></PrivateRouters>
            }
          
        ]
    },
   
]);

export default routes;