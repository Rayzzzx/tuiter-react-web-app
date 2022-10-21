import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const NavigationSidebar = () => {
  const { pathname } = useLocation();
  const paths = pathname.split("/");
  const active = paths[2];

  return (
    <div className="list-group">
      <Link className="list-group-item">
        <i className="fa-solid fa-t"></i>
      </Link>
      <Link
        to="/tuiter/home"
        className={`list-group-item
                    ${active === "home" ? "active" : ""}`}
      >
        <div className="float-start">
          <i className="fas fa-home"></i>
        </div>
        <div className="d-none float-start d-xl-block">&nbsp;Home</div>
      </Link>
      <Link
        to="/"
        className={`list-group-item
                    ${active === "lab" ? "active" : ""}`}
      >
        <div className="float-start">
          <i className="fa-solid fa-flask-vial"></i>
        </div>
        <div className="d-none float-start d-xl-block">&nbsp;Labs</div>
      </Link>
      <Link
        to="/tuiter/explore"
        className={`list-group-item
                    ${active === "explore" ? "active" : ""}`}
      >
        <div className="float-start">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="d-none float-start d-xl-block">&nbsp;Explore</div>
      </Link>
      <Link
        to="/"
        className={`list-group-item
                    ${active === "notifications" ? "active" : ""}`}
      >
        <div className="float-start">
          <i className="fas fa-bell"></i>
        </div>
        <div className="d-none float-start d-xl-block">&nbsp;Notifications</div>
      </Link>
      <Link
        to="/"
        className={`list-group-item
                    ${active === "messages" ? "active" : ""}`}
      >
        <div className="float-start">
          <i className="fas fa-envelope"></i>
        </div>
        <div className="d-none float-start d-xl-block">&nbsp;Messages</div>
      </Link>
      <Link
        to="/"
        className={`list-group-item
                    ${active === "bookmarks" ? "active" : ""}`}
      >
        <div className="float-start">
          <i className="fas fa-bookmark"></i>
        </div>
        <div className="d-none float-start d-xl-block">&nbsp;Bookmarks</div>
      </Link>
      <Link
        to="/"
        className={`list-group-item
                    ${active === "lists" ? "active" : ""}`}
      >
        <div className="float-start">
          <i className="fas fa-list"></i>
        </div>
        <div className="d-none float-start d-xl-block">&nbsp;Lists</div>
      </Link>
      <Link
        to="/"
        className={`list-group-item
                    ${active === "profile" ? "active" : ""}`}
      >
        <div className="float-start">
          <i className="fas fa-user"></i>
        </div>
        <div className="d-none float-start d-xl-block">&nbsp;Profile</div>
      </Link>
      <Link
        to="/"
        className={`list-group-item
                    ${active === "more" ? "active" : ""}`}
      >
        <div className="float-start">
          <i className="fa-solid fa-circle-info"></i>
        </div>
        <div className="d-none float-start d-xl-block">&nbsp;More</div>
      </Link>
    </div>
  );
};
export default NavigationSidebar;
