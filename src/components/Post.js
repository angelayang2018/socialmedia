import React from "react";

export default function Post() {
  return (
    <div className="post">
      <div className="postInfo">
        <div className = "profilePhoto">Pic</div>
        <p>Name</p>
        <p>Time</p>
      </div>
      <div className="postContent"></div>
      <div className="postCaption">
        <div className="likesContainer">heart comment</div>
        <div>
          <p>64 likes</p>
          <p>username</p>
          <p>Caption</p>
          <p>View all x comments</p>
        </div>
      </div>
    </div>
  );
}
