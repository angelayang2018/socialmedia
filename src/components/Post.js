import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";

export default function Post() {
  return (
    <div className="post">
      <div className="postInfo">
        <div className="profilePhoto">Pic</div>
        <p className="bold">angelayang146</p>
        <p className="gray">•</p>
        <p className="gray">1d</p>
      </div>
      <div className="postContent"></div>
      <div className="postCaption">
        <div className="likesContainer">
          <FontAwesomeIcon icon={faHeart} />{" "}
          <FontAwesomeIcon icon={faComment} />
        </div>
        <div>
          <p className="bold">64 likes</p>
          <div className = "caption">
            <p className="bold">angelayang146</p>
            <p>Maomao upside down and showing her warm belly :)</p>
          </div>

          <p>View all 12 comments</p>
          <p>Add a comment...</p>
        </div>
      </div>
    </div>
  );
}
