import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,

} from "@fortawesome/free-solid-svg-icons";
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from "react-router-dom";
import Create from "./Create";
import Search from "./Search";
import More from "./More";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <h1 className = "instagram">Instagram</h1><InstagramIcon className = "logo" />
      </Link>
      <ul>
        <Link to="/">
          <li className="active">
            <FontAwesomeIcon icon={faHouse} />
            <span className = "navText">Home</span>
          </li>
        </Link>
        <Search />
        <Create />
        <Link to="/profile">
          <li>
            <div className="profilePhoto">Pic</div>
            <span className = "navText">Profile</span>
          </li>
        </Link>
      </ul>
      <More />
    </div>
  );
}
