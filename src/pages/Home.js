import React from "react";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import Suggestions from "../components/Suggestions";

export default function Home() {
  return (
    <div className="home">
      <Navbar></Navbar>
      <div className="navTemp"></div>
      <div className="homeContainer">
        <div className="posts">
          <Post></Post>
          <Post></Post>
          <Post></Post>
        </div>
        <Suggestions></Suggestions>
      </div>
    </div>
  );
}
