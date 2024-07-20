import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { message } from "antd"; // Assuming you are using antd for messages

const AllPost = () => {
  const [data, setData] = useState(null);
  const { user } = useSelector((state) => state.user);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/vi/user/getData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({ user }),
      });
      const data = await res.json();
      if (res.ok) {
        message.success(data.message);
        setData(data.data);
        console.log(data.data);
      } else {
        message.error(data.message);
      }
    } catch (error) {
      message.error("Error fetching data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-4">
        {data ? (
          data.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 mb-4">
              <div className="text-gray-600 text-sm">
                {new Date(item.inputTime).toLocaleString()}
              </div>
              <div className="text-gray-800 mt-2">{item.inputText}</div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-600">No Data Found</div>
        )}
      </div>
    </div>
  );
};

export default AllPost;
