
import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import ErrorPage from '../layout/ErrorPage';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AddProduct from '../pages/AddProduct';
import PrivateRouters from './PrivateRoutes';
import UpdateProduct from '../pages/UpdateProduct';
import About from '../components/About';
import Contact from '../components/Contact';
import Service from '../pages/Service';
import ManageServices from '../pages/ManageServices';
import MySchedules from '../pages/MySchedules';
import ServiceDetails from '../components/Service/ServiceDetails';


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
                path:"/addproduct",
                element:<PrivateRouters><AddProduct></AddProduct></PrivateRouters>
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
                path:"/updateproduct/:id",
                element:<PrivateRouters><UpdateProduct></UpdateProduct></PrivateRouters>
            },
            {
                path: "/servicedetails/:id",
                element: <ServiceDetails></ServiceDetails>,
            }
          
        ]
    },
   
]);

export default routes;