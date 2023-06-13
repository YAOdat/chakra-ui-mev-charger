import React from 'react';
import './glass.css';
import { useParams } from 'react-router-dom';
import { blogPosts } from './data/productdata';
import {useColorMode} from "@chakra-ui/react";


function PostPage() {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === id);
  const { colorMode } = useColorMode();
console.log(colorMode)

  const replaceYouTubeLinks = (content) => {
    const youtubeLinkRegex = /(https?:\/\/(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+))/g;
    const embeddedPlayerTemplate = '<iframe width="560" height="315" src="https://www.youtube.com/embed/$2" frameborder="0" allowfullscreen></iframe>';
    const chargerLink = '<a href="https://mevcharger.com/products/chargers" target="_blank" rel="noopener noreferrer" style="color: green;" >charger</a>';

    const paragraphs = content.split('\n\n'); // Split the content into paragraphs
  
    const transformedContent = paragraphs.map((paragraph, index) => {
      const replacedContent = paragraph.replace(youtubeLinkRegex, embeddedPlayerTemplate).replace(/charger/g, chargerLink);
      return `<p key="${index}">${replacedContent}</p>`; // Wrap each paragraph in <p> tags
    });
  
    return transformedContent.join('<br/>'); // Join the paragraphs back into a single string
  };

  return (
    <article className="glass-body" id={`glass-body-${colorMode}`}>
    <div className="card" id={`card-${colorMode}`}>
      <a href="#">
        <h1 className="card-title" id={`card-title-${colorMode}`}>{post.title}</h1>
      </a>
      <div id={`card-content-${colorMode}`} dangerouslySetInnerHTML={{ __html: replaceYouTubeLinks(post.content) }}></div>
      <img src={post.contentImageUrl} alt="Post Image" />
      <div className="blog-post-author-container">
        <br></br>
        {post.author && <h3>Written by: {post.author}</h3>}
        <h3>Published on: {post.date}</h3>
        <h3 className="blog-post-tags">Tags: {post.tags.join(', ')}</h3>
        {post.category && <h3>Category: {post.category}</h3>}
      </div>
    </div>
  </article>
  );
}

export default PostPage;
