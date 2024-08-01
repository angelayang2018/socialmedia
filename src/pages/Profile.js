import React from "react";
import Navbar from "../components/Navbar";
import SquarePost from "../components/SquarePost";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="profile">
      <Navbar></Navbar>
      <div className="navTemp"></div>
      <div className = "container">
        <div className="profileContainer">
          <p className = "profilePic"></p>
          <div>
            <div className="editProfile">
              <h2>angelayang146</h2>
              <Link to = "/editprofile"><button className = "editButton" ><p className = "bold">Edit profile</p></button></Link>
            </div>
            <div className="followerInfo">
              <p><span className="bold">2</span> posts</p>
              <p><span className="bold">51</span> followers</p>
              <p><span className="bold">60</span> following</p>
            </div>
            <div>
              <p className="bold">Angela Yang</p>
            </div>
          </div>
        </div>

        <hr></hr>

        <div className="posts">
          <SquarePost></SquarePost>
          <SquarePost></SquarePost>
          <SquarePost></SquarePost>
          
        </div>

        <div className = "profileFooter">
          <ul className = "darkgray profileFooterLinks">
            <li>About</li>
            <li>Jobs</li>
            <li>API</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Locations</li>
            <li>Contact</li>
            <li>Help</li>
          </ul>
          <p className = "darkgray">© 2024 Instagram from Meta</p>
        </div>
      </div>
    </div>
  );
}
