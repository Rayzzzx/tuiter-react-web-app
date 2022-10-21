import React from "react";

const PostItem = ({
  post = {
    avatarIcon: "elonmusk.jpeg",
    userName: "Elon Musk",
    handle: "elonmusk",
    time: "23h",
    content: "Amazing show about @inspiration4x mission!",
    image: "inspiration4x.jpeg",
    newTitle:
      "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
    newsContent:
      "From training to launch to landing, this all-access docuseries rides along with the inspiration4 crew on the first all-civilian orbital space ...",
    newsLink: "netflix.com",
    comment: "4.2k",
    share: "3.5k",
    like: "37.5k",
  },
}) => {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-1">
          <img
            className="rounded-circle"
            style={{ width: "45px" }}
            src={`/images/${post.avatarIcon}`}
            alt="..."
          />
        </div>
        <div className="col-11 ps-4">
          <div className="row">
            <div className="row pe-0">
              <div className="col-11">
                <span className="fw-bolder">{post.userName}</span>
                <i className="bi bi-patch-check-fill"></i>
                <span className="text-secondary">
                  {" "}
                  @{post.handle} - {post.time}
                </span>
              </div>
              <div className="col-1 pe-0">
                <span className="float-end text-secondary fw-bolder">
                  &#8230;
                </span>
              </div>
            </div>
          </div>
          <div>{post.content}</div>

          <div className="card mt-2 border border-secondary rounded-4">
            <img
              src={`/images/${post.image}`}
              className="card-img-top rounded-4"
              alt="..."
            />
            {post.newTitle || post.newsContent || post.newsLink ? (
              <div className="card-body border-top border-secondary p-3">
                {post.newTitle ? (
                  <p className="card-text mb-0">{post.newTitle}</p>
                ) : (
                  ""
                )}
                {post.newsContent ? (
                  <p className="text-secondary mb-0">{post.newsContent}</p>
                ) : (
                  ""
                )}
                {post.newsContent ? (
                  <p className="text-secondary mb-0">
                    <i className="fa-solid fa-link"></i>${post.newsLink}
                  </p>
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="row mt-2">
            <div className="col-3">
              <a className="text-secondary text-decoration-none" href="/#">
                <i className="bi bi-chat"></i>
                <span className="ms-3">{post.comment}</span>
              </a>
            </div>
            <div className="col-3">
              <a className="text-secondary text-decoration-none" href="/#">
                <i className="bi bi-repeat"></i>
                <span className="ms-3">{post.share}</span>
              </a>
            </div>
            <div className="col-3">
              <a className="text-secondary text-decoration-none" href="/#">
                <i className="bi bi-heart"></i>
                <span className="ms-3">{post.like}</span>
              </a>
            </div>
            <div className="col-3">
              <a className="text-secondary text-decoration-none" href="/#">
                <i className="bi bi-upload"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default PostItem;
