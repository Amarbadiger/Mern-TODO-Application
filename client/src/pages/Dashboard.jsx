import React, { useEffect } from "react";

const Dashboard = () => {
  const getUser = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/vi/user/getUserdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return <div>Dashboard</div>;
};

export default Dashboard;
