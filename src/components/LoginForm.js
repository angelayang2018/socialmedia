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
      <h1>Log in</h1>

      <form>
        <TextField
          fullWidth
          label="Phone Number, Username or Email"
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
        <Link to="/signup"><p>Forgot your password?</p></Link>

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
