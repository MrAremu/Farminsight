import React from 'react';
import '../components/BlogPost.css';

interface Props {
  title: string;
  content: string;
}

const BlogPost: React.FC<Props> = ({ title, content }) => {
  return (
    <div className="blog-post-container">
      <h2 className="blog-post-title">{title}</h2>
      <div className="blog-post-content">{content}</div>
    </div>
  );
};

export default BlogPost;
