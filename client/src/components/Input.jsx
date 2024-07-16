import React, { useState } from "react";
import { useSelector } from "react-redux";
import { message } from "antd";
import { Link } from "react-router-dom";
const Input = () => {
  const [inputText, setInputText] = useState("");
  const [inputTime, setInputTime] = useState("");
  const { user } = useSelector((state) => state.user);

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "http://localhost:5000/api/vi/user/getInputData",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          body: JSON.stringify({ user, inputTime, inputText }),
        }
      );
      const data = await res.json();
      if (res.ok) {
        message.success(data.message);
      } else {
        message.error(data.message);
      }
    } catch (error) {
      message.error("Data fetch failed, please try again.");
    }
  };

  return (
    <>
      <form
        className="shadow-md mt-4 p-5 rounded-md flex flex-col items-center justify-center"
        onSubmit={handlePostSubmit}
      >
        <label htmlFor="date" className="block mb-2">
          Date
        </label>
        <input
          type="date"
          className="block mb-4 p-2 border rounded w-[50%]"
          onChange={(e) => setInputTime(e.target.value)}
          name="date"
        />

        <label htmlFor="text" className="block mb-2">
          Input
        </label>
        <textarea
          type="text"
          rows="5"
          name="input"
          className="block p-2 border rounded w-[50%] mb-4"
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Post
        </button>
      </form>
      <div>
        <Link></Link>
      </div>
    </>
  );
};

export default Input;
