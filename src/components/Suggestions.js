import React from "react";
import { Link } from "react-router-dom";

export default function Suggestions() {
  return (
    <div className="suggestionsContainer">
      <div className="suggestProfile">
        <div className="profile">
          <div className="profilePhoto">Pic</div>
          <div>
            <p className="bold">angelayang146</p>
            <p>Angela Yang</p>
          </div>
        </div>
        <Link to ="/login"><p className = "blue">Switch</p></Link>
      </div>
      <div>
        <h4>Suggestion For You</h4>
        <div className="suggestion">
          <div className="suggestProfile">
            <div className="profile">
              <div className="profilePhoto">Pic</div>
              <div>
                <p className="bold">heeeyalvin</p>
                <p>Alvin Agana</p>
              </div>
            </div>
            <p className = "blue">Follow</p>
          </div>
        </div>
      </div>

      <div className="home_footer">
        <div className="links">
          <p>About • </p>
          <p>Help • </p>
          <p>API • </p>
          <p>Jobs • </p>
          <p>Privacy • </p>
          <p>Terms • </p>
          <p>Locations • </p>
          <p>Press</p>
        </div>
        <p>© 2024 Instagram from Meta</p>
      </div>
    </div>
  );
}
