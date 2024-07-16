import React, { useState, useEffect } from "react";
import Input from "../components/Input.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/userSlice.js";
import Navbar from "../components/Navbar.jsx";

const Dashboard = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  // Login User Data

  const getUserData = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/vi/user/getUserdata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({}),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      dispatch(setUser(data.data));
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-8">
        <div className="bg-slate-100 min-h-screen shadow-xl p-4 flex flex-col text-center">
          {error ? (
            <div className="text-red-500">Error: {error}</div>
          ) : (
            <>
              {user ? (
                <div className="text-blue-500 text-2xl shadow-md inline p-1 rounded-lg">
                  {`Hello ${user.name} how are you today`}
                </div>
              ) : (
                <div>Loading...</div>
              )}
            </>
          )}
          <Input />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
