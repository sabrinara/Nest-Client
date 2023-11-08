
import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import ErrorPage from '../layout/ErrorPage';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AddProduct from '../pages/AddProduct';
import MyCart from '../pages/MyCart';
import PrivateRouters from './PrivateRoutes';
import ABrand from '../components/Service/ABrand/ABrand';
import ABrandDetail from '../components/Service/ABrand/ABrandDetail';
import UpdateProduct from '../pages/UpdateProduct';
import About from '../components/About';
import Contact from '../components/Contact';
import Service from '../pages/Service';
import ManageServices from '../pages/ManageServices';


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
                path:"/mycart",
                element:<PrivateRouters><MyCart></MyCart></PrivateRouters>
            },
            {
                path:"/manageservices",
                element:<PrivateRouters><ManageServices></ManageServices></PrivateRouters>
            },
            {
                path:"/abrand/:id",
                element:<PrivateRouters><ABrand></ABrand></PrivateRouters>,
                loader: () => fetch('/data.json')
            },
            {
                path:"/abranddetail/:id",
                element:<PrivateRouters><ABrandDetail></ABrandDetail></PrivateRouters>,
                
            },
            {
                path:"/updateproduct/:id",
                element:<PrivateRouters><UpdateProduct></UpdateProduct></PrivateRouters>
            }
          
        ]
    },
   
]);

export default routes;