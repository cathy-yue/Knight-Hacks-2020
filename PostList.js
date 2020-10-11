import React, { Component } from "react";

import Post from "./Post";

class PostList extends Component {
  render() {
    return (
      <div className="container">
        <ol className="post_list">
          {this.state.posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </ol>
      </div>
    );
  }
}

export default PostList;