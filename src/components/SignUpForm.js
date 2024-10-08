import React, { useState } from "react";
import { InputAdornment, TextField, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase";
import {useNavigate} from "react-router-dom";


export default function SignUpForm() {

  let navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const handleShowPassword = () => setShowPassword((show) => !show);

  const SignUp = async (e) => {
    e.preventDefault();

    
    try {
      const response = await fetch('http://localhost:8080/createUser', { // Replace with your actual API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const result = await response.text(); // Adjust based on your API's response format
        console.log('Sign up successful:', result);
      } else {
        console.error('Sign up failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error occurred during sign up:', error);
    }
  }
  
  return (
    <div className="loginFormCont">
      <h2>Sign up to see photos and videos from your friends</h2>
      <h1>Register with</h1>
      <button className="facebook">Facebook</button>
      <p className="or">
        <span>Or</span>
      </p>
      <form onSubmit = {SignUp}>
        <TextField
          fullWidth
          label="Email"
          margin="normal"
          variant="standard"
          value = {email}
          onChange = {(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          fullWidth
          label="Full Name"
          margin="normal"
          variant="standard"
          value = {name}
          onChange = {(e) => setName(e.target.value)}
          required
        />
        
        <TextField
          fullWidth
          type={showPassword ? "text" : "password"}
          margin="normal"
          label="Password"
          variant="standard"
          value = {password}
          onChange = {(e) => setPassword(e.target.value)}
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
        <p>
          People who use our service may have uploaded your contact information
          to Instagram. <a href="https://www.facebook.com/help/instagram/261704639352628">Learn More</a>
        </p>
        <p>
          By signing up, you agree to our <a href="https://help.instagram.com/581066165581870/?locale=en_US">Terms</a>,{" "}
          <a href="https://www.facebook.com/privacy/policy">Privacy Policy</a> and <a href="https://privacycenter.instagram.com/policies/cookies/">Cookies Policy.</a>
        </p>
        <button className="btnColor">
          <p>CREATE ACCOUNT</p>
        </button>
      </form>

      <p>
        Have an account? <Link className = "blueLink" to = "/login">Log in</Link>
      </p>
    </div>
  );
}
