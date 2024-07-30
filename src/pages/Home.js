import React from "react";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import Suggestions from "../components/Suggestions";
import Story from "../components/Story";

export default function Home() {
  return (
    
      <div className="home">
        <Navbar></Navbar>
        <div className = "homeContainer">
          <Story></Story>
          <div className="posts">
            <Post></Post>
          </div>
        </div>
        <Suggestions></Suggestions>
      </div>
  
  );
}
