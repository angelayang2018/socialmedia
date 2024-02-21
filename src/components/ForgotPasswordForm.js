import React from "react";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

export default function ForgotPasswordForm() {
  return (
    <div className="loginFormCont">
      <h1>Trouble logging in?</h1>

      <form>
        <p>
          Enter your phone, username, or email and we'll send you a link to get
          back into your account.
        </p>
        <TextField
          fullWidth
          label="Phone Number, Username or Email"
          margin="normal"
          variant="standard"
        />
        <button className="btnColor">
          <p>SEND LOGIN LINK</p>
        </button>

        <a href="">
          {" "}
          <p>Can't reset your password?</p>
        </a>
      </form>
      <p className="or">
        <span>Or</span>
      </p>
      <button className="btnColor">
        <p>CREATE A NEW ACCOUNT</p>
      </button>

      <Link to="/login">
        <p>Back to Login</p>
      </Link>
    </div>
  );
}
