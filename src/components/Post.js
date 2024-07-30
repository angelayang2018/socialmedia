import React from "react";

export default function Post() {
  return (
    <div className="post">
      <div className="postInfo">
        <p>Picture</p>
        <p>Name</p>
        <p>Time</p>
      </div>
      <div className="postContent"></div>
      <div className="postCaption">
        <div className="likesContainer"></div>
        <div>
          <p>64 likes</p>
          <p>username</p>
          <p>Caption</p>
        </div>
      </div>
    </div>
  );
}
