import React, { useState } from "react";
import { InputAdornment, TextField, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword((show) => !show);
  return (
    <div className="loginFormCont">
      <h2>Sign up to see photos and videos from your friends</h2>
      <h1>Register with</h1>
      <button className="facebook">Facebook</button>
      <p className="or">
        <span>Or</span>
      </p>
      <form>
        <TextField
          fullWidth
          label="Phone Number or Email"
          margin="normal"
          variant="standard"
        />
        <TextField
          fullWidth
          label="Full Name"
          margin="normal"
          variant="standard"
        />
        <TextField
          fullWidth
          label="Username"
          margin="normal"
          variant="standard"
        />
        <TextField
          fullWidth
          type={showPassword ? "text" : "password"}
          margin="normal"
          label="Password"
          variant="standard"
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
        />
        <p>
          People who use our service may have uploaded your contact information
          to Instagram. <a href="">Learn More</a>
        </p>
        <p>
          By signing up, you agree to our <a href="">Terms</a>,{" "}
          <a href="">Privacy Policy</a> and <a href="">Cookies Policy.</a>
        </p>
        <button className="btnColor">
          <p>CREATE ACCOUNT</p>
        </button>
      </form>

      <p>
        Have an account? <Link to = "/login">Log in</Link>
      </p>
    </div>
  );
}
