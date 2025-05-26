import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { AppContext } from "../../context/AppContext";
import {toast} from 'react-toastify';
import axios from "axios";
const Navbar = () => {
  const { navigate, isEducator, backendUrl, setIsEducator, getToken } =
    useContext(AppContext);

  const isCourseListPage = location.pathname.includes("/course-list");

  const { openSignIn } = useClerk();
  const { user } = useUser();

  const becomeEducator = async () => {
    try {
      if (isEducator) {
        navigate("/educator");
        return;
      }
      const token = await getToken();
      const { data } = await axios.get(
        backendUrl + "/api/educator/update-role",
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (data.success) {
        setIsEducator(true);
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div
      className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 
       border-b border-gray-500 py-4 ${isCourseListPage ? "bg-white" : "bg-[#e0e7ff]" }`}
    >
      <div className="flex items-center gap-1">
        <img
          onClick={() => navigate("/")}
          src={assets.skillStack_logo2}
          alt="Logo"
          className="w-7 sm:w-9 lg:w-11 h-auto cursor-pointer"
        />
        <span onClick={() => navigate("/")} className="text-2xl font-bold tracking-wide text-gray-800 cursor-pointer">SkillStack</span>
      </div>

      <div className="hidden md:flex items-center gap-5 text-gray-500">
        <div className="flex item-center gap-5">
          {user && (
            <>
              <button onClick={becomeEducator}>
                {isEducator ? "Educator Dashboard" : "Become Educator"}
              </button>
              | <Link to="/my-enrollments">My Enrollments</Link>
            </>
          )}
        </div>
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => openSignIn()}
             
            className="bg-indigo-600 text-white px-5 py-2 rounded-full font-semibold  
                 border transition-all duration-700 hover:bg-white/20 hover:border-indigo-500 
                hover:scale-105 hover:text-indigo-500 "
          >
            Create Account
          </button>
        )}
      </div>

      {/* For Phone Screens */}
      <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-500">
        <div className="flex items-center gap-1 sm:gap-2 max-sm:text-xs">
          {user && (
            <>
              <button onClick={becomeEducator}>
                {isEducator ? "Educator Dashboard" : "Become Educator"}
              </button>
              | <Link to="/my-enrollments">My Enrollments</Link>
            </>
          )}
        </div>
        {user ? (
          <UserButton />
        ) : (
          <button onClick={() => openSignIn()}>
            {" "}
            <img src={assets.user_icon} alt="user icon" />{" "}
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
