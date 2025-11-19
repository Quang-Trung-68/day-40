import React from "react";
import { useFetchPosts } from "@/services/post";
import "./post.css";

function PostList() {
  const { isLoading, posts } = useFetchPosts();

  return (
    <div className="post-container">
      <h1 className="post-title">Post List</h1>

      {isLoading ? (
        <div className="spinner-wrapper">
          <div className="spinner"></div>
        </div>
      ) : (
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.id} className="post-item">
              <div className="post-user">User ID: {post.userId}</div>
              <h2 className="post-item-title">{post.title}</h2>
              <p className="post-body">{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PostList;
