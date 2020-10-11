import React from "react";

import Entries from "./Entries";

function Post({ post }) {
  const { date, content, author } = post;

  return (
    <li className="post__item">
      <div className="post_wrapper">
        <div className="post_head">
          <div className="post_info">
            <div className="author_name">{author.name}</div>
            <div className="post_date">{date}</div>
          </div>
        </div>
        <p className="post_content">{content}</p>
      </div>

      {entrys.map(entry => (
        <Entries key={entry.id} entry={entry} />
      ))}
    </li>
  );
}

export default Post;