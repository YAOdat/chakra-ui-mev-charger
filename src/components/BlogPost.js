import React from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "./data/productdata";

export default function BlogPost() {
  const { id } = useParams();

  // Find the corresponding blog post based on the ID
  const post = blogPosts.find((post) => post.id === id);

  // Function to replace YouTube links with embedded video players
  const replaceYouTubeLinks = (content) => {
    const youtubeLinkRegex = /(https?:\/\/(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+))/g;
    const embeddedPlayerTemplate = '<iframe width="560" height="315" src="https://www.youtube.com/embed/$2" frameborder="0" allowfullscreen></iframe>';

    return content.replace(youtubeLinkRegex, embeddedPlayerTemplate);
  };

  // Render the blog post if found, or show a message if not found
  return (
    <div>
      {post ? (
        <div>
          <h1>Blog Post</h1>
          <h2>{post.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: replaceYouTubeLinks(post.content) }}></p>
        </div>
      ) : (
        <h2>Blog post not found.</h2>
      )}
    </div>
  );
}
