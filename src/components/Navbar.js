import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass, faHeart, faComment, faHouse, faSquarePlus} from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    <div className="navbar">
      <h1>Instagram</h1>

      <ul>
        <li className = "active"><FontAwesomeIcon icon={faHouse} /> Home</li>
        <li><FontAwesomeIcon icon={faMagnifyingGlass} /> Search</li>
        <li><FontAwesomeIcon icon={faComment} /> Messages</li>
        <li><FontAwesomeIcon icon={faHeart} /> Notifications</li>
        <li><FontAwesomeIcon icon={faSquarePlus} /> Create</li>
        <li>Profile</li>
      </ul>

      <ul>
        <li><FontAwesomeIcon icon={faBars} /> More</li>
      </ul>
    </div>
  );
}
