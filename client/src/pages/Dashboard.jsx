import React, { useEffect } from "react";

const Dashboard = () => {
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
      console.log(data); // Process the data as needed
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return <div>dashboard</div>;
};

export default Dashboard;
