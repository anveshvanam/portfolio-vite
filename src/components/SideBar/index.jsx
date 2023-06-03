import { Link } from "react-router-dom";
import { useState } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillMail,
} from "react-icons/ai";
const SideBar = () => {
  return (
    <div className="flex sticky h-screen overflow-auto flex-col justify-center ">
      <div
        className=" h-72 w-16 m-1 flex flex-col sticky
        bg-gray-900 text-white shadow-lg justify-center 
        rounded-lg "
      >
        <a href="https://github.com/anveshvanam" target="_blank">
          <SideBarIcon icon={<AiFillGithub size="28" />} />
        </a>
        <a href="https://www.linkedin.com/in/anveshvanam/" target="_blank">
          <SideBarIcon icon={<AiFillLinkedin size="28" />} />
        </a>
        <a href="mailto:anveshvanam5@gmail.com" target="_blank">
          <SideBarIcon icon={<AiFillMail size="28" />} />
        </a>
        <a href="https://www.linkedin.com/in/anveshvanam/" target="_blank">
          <SideBarIcon icon={<AiFillTwitterCircle size="28" />} />
        </a>
      </div>
    </div>
  );
};

const SideBarIcon = ({ icon }) => <div className="sidebar-icon">{icon}</div>;

export default SideBar;
