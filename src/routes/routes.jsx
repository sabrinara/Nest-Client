
import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import ErrorPage from '../layout/ErrorPage';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PrivateRouters from './PrivateRoutes';
import UpdateProduct from '../pages/UpdateService';
import About from '../components/About';
import Contact from '../components/Contact';
import Service from '../pages/Service';
import ManageServices from '../pages/ManageServices';
import MySchedules from '../pages/MySchedules';
import ServiceDetails from '../components/Service/ServiceDetails';
import AddService from '../pages/AddService';
import UpdateService from '../pages/UpdateService';


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () =>  fetch('/data.json')
            },
            {
                path: '/about',
                element: <About></About>,
                
            },
            {
                path: '/contact',
                element: <Contact></Contact>,
            
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
                path:"/manageservices",
                element:<PrivateRouters><ManageServices></ManageServices></PrivateRouters>
            },
           
            {
                path:"/updateservice/:id",
                element:<PrivateRouters><UpdateService></UpdateService></PrivateRouters>
            },
            {
                path: "/servicedetails/:id",
                element: <ServiceDetails></ServiceDetails>,
            }
          
        ]
    },
   
]);

export default routes;