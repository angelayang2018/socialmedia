import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass, faHeart, faComment, faHouse, faSquarePlus} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <h1>Instagram</h1>

      <ul>
      <Link to = "/"><li className = "active"><FontAwesomeIcon icon={faHouse} />Home</li></Link>
        <li><FontAwesomeIcon icon={faMagnifyingGlass} /> Search</li>
        <li><FontAwesomeIcon icon={faSquarePlus} /> Create</li>
        <Link to = "/profile"><li><div className = "profilePhoto">Pic</div>Profile</li></Link>
      </ul>

      <ul>
        <li><FontAwesomeIcon icon={faBars} /> More</li>
      </ul>
    </div>
  );
}
