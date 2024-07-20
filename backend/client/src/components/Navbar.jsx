import { message } from "antd";
import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(localStorage.getItem("token") ? false : true);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    message.success("Logout Successfully");
    navigate("/");
    // Close mobile menu after logout
    setNav(false);
  };

  return (
    <>
      <nav className="h-[90px] bg-blue-400 flex justify-between items-center px-10 shadow-lg border border-blue-300">
        <div className="logo font-bold rounded-xl text-white text-5xl inline p-4">
          <Link to="/">ToDO</Link>
        </div>
        <div className="login font-semibold text-2xl text-white">
          {nav ? (
            <button className="bg-white text-xl text-blue-400 p-[5px] rounded-md hover:text-blue-500">
              <Link to="/login">Login</Link>
            </button>
          ) : (
            <button className="bg-white text-xl text-blue-400 p-[5px] rounded-md hover:text-blue-500">
              <a to="/login" onClick={handleLogout}>
                Logout
              </a>
            </button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
