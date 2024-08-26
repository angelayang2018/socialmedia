import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/styles.css"
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import React, {useState, useEffect} from "react";
import axios from "axios";

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080').then((data) => {
      //this console.log will be in our frontend console
      console.log(data)
    })
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path = "/profile" element = {<Profile />}></Route>
        <Route path = "/profile/:userId" element = {<Profile></Profile>}></Route>
        <Route path = "/editprofile" element = {<EditProfile />}></Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
