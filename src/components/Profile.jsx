import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1); 
    };
    return (
        <div>
            <h1 className="text-6xl font-bold text-center my-16 text-cyan-600">Profile</h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="flex flex-row">
                <Link onClick={goBack} className="text-3xl text-sky-600"><IoMdArrowRoundBack /></Link>
                <img src={user?.photoURL} className="w-72 h-72 mt-4 rounded border-4 border-cyan-800" alt="" />
            </div>
            <div className="flex flex-col text-2xl mt-4 md:mt-12 gap-6 ">
                <h2><span className="text-cyan-600 font-semibold">Name:</span> {user?.displayName}</h2>
                <h2><span className="text-cyan-600 font-semibold">Email:</span> {user?.email}</h2>
            </div>
            </div>
        </div>
    );
};

export default Profile;