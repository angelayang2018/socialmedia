import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/styles.css"
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
