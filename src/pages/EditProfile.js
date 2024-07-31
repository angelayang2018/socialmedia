import React from "react";
import Navbar from "../components/Navbar";

export default function EditProfile() {
  return (
    <div className="editProfile">
      <Navbar></Navbar>
      <div className="navTemp"></div>

      <div className="container">
        <h2>Edit Profile</h2>

        <div className="editContainer">
          <div className = "userInfo">
            <p className="editPic">Pic</p>
            <div className = "username">
              <p className = "bold">angelayang146</p>
              <p>Angela Yang</p>
            </div>
          </div>

          <button>Change photo</button>
        </div>

        <h3>Bio</h3>
        <textarea>Bio</textarea>

        <button>Submit</button>
      </div>
    </div>
  );
}
