import React from "react";
import { blogPosts } from "./data/productdata";

export default function BlogPost() {
  return (
    <div>
      <h1>Blog Post</h1>
      {blogPosts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
