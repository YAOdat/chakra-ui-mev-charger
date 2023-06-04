import React from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "./data/productdata";

export default function BlogPost() {
  const { id } = useParams();

  // Find the corresponding blog post based on the ID
  const post = blogPosts.find((post) => post.id === id);

  // Render the blog post if found, or show a message if not found
  return (
    <div>
      {post ? (
        <div>
          <h1>Blog Post</h1>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ) : (
        <h2>Blog post not found.</h2>
      )}
    </div>
  );
}
