import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  return (
    <div>
      <li>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <span className="navText">Search</span>
      </li>
    </div>
  );
}
