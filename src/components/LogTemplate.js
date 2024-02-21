import React from "react";
import Footer from "../components/Footer";

export default function LogTemplate({ form }) {
  return (
    <div className="login">
      <div className="loginCont">
        <div className="loginPic">
          <div>
            <img
              src="https://i.ibb.co/p1qvYfJ/instagram-logo.png"
              alt="instagram-logo"
            />
          </div>
          <img src="https://i.ibb.co/VQdPg0M/bloghome.png" alt="bloghome" />
        </div>
        {form}
      </div>
      <Footer></Footer>
    </div>
  );
}
