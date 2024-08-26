import React, { useState } from "react";
import { InputAdornment, TextField, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleShowPassword = () => setShowPassword((show) => !show);

  const SignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((useCredential) => {
        console.log(useCredential)
    }).catch((error) => {
        console.log(error);
    })

  }
  return (
    <div className="loginFormCont">
      <h1>Log in</h1>

      <form onSubmit={SignIn}>
        <TextField
          fullWidth
          label="Email"
          margin="normal"
          variant="standard"
          value = {email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <TextField
          fullWidth
          type={showPassword ? "text" : "password"}
          margin="normal"
          label="Password"
          variant="standard"
          value = {password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleShowPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          required
        />
        <Link to="/forgotpassword"><p>Forgot your password?</p></Link>

        <button className="btnColor">
          <p>LOG IN</p>
        </button>
      </form>
      <p className="or">
        <span>Or</span>
      </p>
      <button className="facebook">Facebook</button>

      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
}
