import { useContext } from "react";
import { Link,  useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';
import 'react-toastify/dist/ReactToastify.css';
import Logo from "../assets/images/logo.png";
const Login = () => {

    const { signIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleLogin = (e) => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);


        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
                toast('Successfully Login');
               
            })
            .catch(error => {
                console.log(error.message);
                toast('Login failed. Please check your email and password.');
            });
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                console.log(result.user)
                navigate('/');
                toast('Successfully Login');
                
            })
            .catch(error => {
                console.error(error);
                toast('Login failed. Please check your email and password.');
            });
    }
    return (
        <div>
            <div className="hero  min-h-screen bg-base-200 mb-6" >
                <div className="hero-content flex-col ">
                    <div className="text-center mt-8 mb-4">
                        <h1 className=" text-cyan-800 text-5xl  font-bold">Login!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full md:w-[100rem] max-w-xl shadow-2xl">
                    <Link to="/" className="flex items-center justify-center mt-8">
                            <img className="w-10 h-10 " src={Logo} alt="logo" />
                            <h1 className="text-2xl "> <span className="text-4xl font-sans font-bold text-red-500">N</span>EST</h1>
                        </Link>

                        <form className="card-body" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                                
                            </div>
                            <div className="form-control mt-4">
                                <button className="p-3 bg-sky-200 text-sky-800 font-extrabold  rounded-md">Login</button>
                            </div>

                        </form>

                        <div className="flex flex-col items-center justify-center mb-6">
                            <p className="text-[15px]">New in the Website? Please<Link to="/register"><button className="p-1 text-blue-700 font-bold">Register</button></Link></p>
                        
                            <div className="divider ">Or, Continue With</div>
                            <button
                                type="button"
                                onClick={handleGoogleSignIn} 
                                className="btn bg-sky-200 text-sky-800 font-extrabold   rounded-md flex justify-center items-center p-2 px-16 lg:px-52 "
                            >
                                Google
                                <FcGoogle className="w-8 h-8" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored" />
        </div>
    );
};

export default Login;