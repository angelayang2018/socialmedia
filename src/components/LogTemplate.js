import React from "react";
import Footer from "../components/Footer";

export default function LogTemplate({ form }) {
  return (
    <div className="login">
      <div className="loginCont">
        <div className="loginPic">
          <div>
            <img
              src="images/instagram-logo.png"
              alt="instagram-logo"
            />
          </div>
          <img src="images/bloghome.png" alt="bloghome" />
        </div>
        {form}
      </div>
      <Footer></Footer>
    </div>
  );
}
