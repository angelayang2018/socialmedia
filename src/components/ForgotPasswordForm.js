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
          label="Email"
          margin="normal"
          variant="standard"
        />
        <br></br>
        
        <button className="btnColor">
          <p>SEND RESET LINK</p>
        </button>

        <a href="https://help.instagram.com/374546259294234">
          <p>Can't reset your password?</p>
        </a>
      </form>
      <p className="or">
        <span>Or</span>
      </p>
      <button className="btnColor">
        <Link to = "/signup"><p>CREATE A NEW ACCOUNT</p></Link>
      </button>

      <Link to="/login">
        <p>Back to Login</p>
      </Link>
    </div>
  );
}
