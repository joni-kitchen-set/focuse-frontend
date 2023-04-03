import React from "react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";

const Tasks = () => {
  const [tasks, setTask] = useState([
    { task: "Hackkerrank or Leetcodes", priority: "urgent" },
    { task: "Make Portfolio", priority: "normal" },
  ]);

  return (
    <>
      <h1 className="text-3xl text-white font-bold">Tasks</h1>
      <div className="pb-48">
        <div className="task-add-area flex rounded-2xl shadow-sm">
          <input
            type="text"
            style={{ width: "500px" }}
            placeholder="Add New Task"
            className="task text-xl text-white py-3 px-3 w-full focus:z-10 h-12 rounded-l-lg bg-opacity-20 bg-black focus:outline-none focus:border-2 focus:border-black focus:border-opacity-20 placeholder-opacity-75 placeholder-white"
          />
          <button
            type="submit"
            className="task-add py-3 px-4 inline-flex flex-shrink-0 justify-center items-center gap-2 rounded-r-lg border border-transparent text-white hover:opacity-75 focus:z-10 focus:outline-none focus:ring-1 transition-all  ease-in-out duration-100"
          >
            <FaPlus />
          </button>
        </div>

        <div className="task-area">
          <ul className="flex gap-8 py-6 flex-wrap">
            {tasks.map((e, i) => {
              return (
                <li key={i} className={` ${e.priority} flex justify-between items-center gap-4 py-3 ps-3 pe-12 rounded-lg bg-black bg-opacity-25 text-white text-xl relative`}>
                  <p>{e.task}</p>
                  <button className="hover:opacity-75 absolute right-0">
                    <HiOutlineDotsVertical className="w-8 h-8" />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Tasks;
