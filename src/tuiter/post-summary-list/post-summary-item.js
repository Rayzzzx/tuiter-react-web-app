import React from "react";

const PostSummaryItem = ({
  post = {
    topic: "Space",
    userName: "SpaceX",
    time: "2h",
    title:
      "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
    image: "tesla.png",
  },
}) => {
  return (
    <li className="list-group-item">
      <div className="row pb-2">
        <div className="col-9">
          <div className="text-secondary">{post.topic}</div>
          <div className="fw-bolder">
            {post.userName} <i className="fa-solid fa-circle-check"></i>
            <span className="text-secondary"> - {post.time}</span>
          </div>
          <div className="fw-bolder">{post.title}</div>
        </div>
        <div className="col-3">
          <img
            className="float-end rounded"
            height={100}
            src={`/images/${post.image}`}
            alt={post.image}
          />
        </div>
      </div>
    </li>
  );
};
export default PostSummaryItem;
