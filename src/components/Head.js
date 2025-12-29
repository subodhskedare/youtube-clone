import React from "react";
import { HAM_BURGGER_IMG, YOUTUBE_LOGO, USER_ICON } from "../utils/constant";
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice'; 
const Head = () => {
  const dispatch = useDispatch();
  return (
    <div className="grid grid-flow-col  p-2 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img
          src={HAM_BURGGER_IMG}
          alt="ham-burger"
          className="h-8 mt-2 mr-3 cursor-pointer"
          onClick={() => dispatch(toggleMenu())}
        />
        <a href="/">
        <img src={YOUTUBE_LOGO} alt="youtube-logo" className="h-10 mt-1" />
        </a>
      </div>
      <div className="col-span-10 text-center">
        <input type="text" placeholder="Search" className="h-4  my-2 p-4 w-1/2 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500" />
        <button className="border border-gray-300 rounded-r-full focus:outline-none focus:border-blue-500 p-1 px-2">🔍</button>
      </div>
      <div className="col-span-1">
        <img src={USER_ICON} alt="user-icon" className="h-8 m-2" />
      </div>
    </div>
  );
};

export default Head;
