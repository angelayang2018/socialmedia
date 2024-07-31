import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass, faHouse, faSquarePlus} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import Create from "./Create";
import Search from "./Search";
import More from "./More";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to = "/"><h1>Instagram</h1></Link>
      <ul>
      <Link to = "/"><li className = "active"><FontAwesomeIcon icon={faHouse} />Home</li></Link>
        <li><FontAwesomeIcon icon={faMagnifyingGlass} /> Search</li>
        <li><FontAwesomeIcon icon={faSquarePlus} /> Create</li>
        <Link to = "/profile"><li><div className = "profilePhoto">Pic</div>Profile</li></Link>
      </ul> 
      <More></More>
      
    </div>
  );
}
