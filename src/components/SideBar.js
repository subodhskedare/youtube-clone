import React from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // early return if menu is not open
  if(!isMenuOpen) return null;
  return (

    <div className="p-5 shadow-lg w-48">
      <ul>
        <Link to="/"><li className="font-medium">Home</li></Link>
        <li className="font-medium">Shorts</li>
        <li className="font-medium">Subscriptions</li>
      </ul>
      <ul>
        <h1 className="font-bold pt-5">user</h1>
      <li >Originals</li>
        <li >YouTube Music</li>
        <li >YouTube Premium</li>
        <li >YouTube TV</li>
        <li >YouTube Kids</li>
      </ul>
      <ul>
        <h1 className="font-bold pt-5">Watch Later</h1>
      <li >Liked Videos</li>
        <li >History</li>
        <li >Your videos</li>
        <li >Watch Later</li>
        <li >YouTube Kids</li>
      </ul>
      
    </div>
  );
};

export default SideBar;
