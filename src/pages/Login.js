import React from "react";
import Footer from "../components/Footer";

export default function Login() {
  return (
    <div className = "login">
      <div className = "loginCont">
        <div>
          Logo
          <p>Picture</p>
        </div>
        <div>
          <h2>Sign up to see photos and videos from your friends</h2>
          <h1>Register with</h1>
          <button className = "facebook">Facebook</button>
          <div><hr></hr><p>Or</p><hr></hr></div>
          <form>
            <input type="text" placeholder="Phone Number or Email"></input>
            <input type="text" placeholder="Full Name"></input>
            <input type="text" placeholder="Username"></input>
            <input type="password" placeholder="Password"></input>
            <p>
              People who use our service may have uploaded your contact
              information to Instagram. Learn More
            </p>
            <p>
              By signing up, you agree to our Terms, Privacy Policy and Cookies
              Policy.
            </p>
            <button>CREATE ACCOUNT</button>
          </form>

          <p>Have an account? Log in</p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
