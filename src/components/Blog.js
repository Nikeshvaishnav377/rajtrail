import React from "react";
import "./Blog.css";

const blogPosts = [
  { title: "Best Places to Visit in Jaipur", date: "March 5, 2025" },
  { title: "Why You Should Visit Udaipur", date: "February 20, 2025" },
  { title: "Hidden Gems in Rajasthan", date: "January 15, 2025" }
];

const Blog = () => {
  return (
    <section className="blog">
      <h2>Latest Travel Blogs</h2>
      <div className="blog-list">
        {blogPosts.map((post, index) => (
          <div className="blog-item" key={index}>
            <h3>{post.title}</h3>
            <p>{post.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;