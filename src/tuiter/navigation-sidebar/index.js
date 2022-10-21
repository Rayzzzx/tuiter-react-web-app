import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = (
    active
) => {
    return (
        <div className="list-group">
            <Link className="list-group-item list-group-item-action"><i
                className="fa-solid fa-t"></i></Link>

            <a className={`list-group-item list-group-item-action ${active === 'home' ? 'active'
                                                                                      : ''}`}>
                <i className="fa-solid fa-house"></i>
                <span className="d-none d-xxl-block wd-margin-left">Home</span>
            </a>

            <a className={`list-group-item
                    ${active === 'explore' ? 'active' : ''}`}>
                Explore
            </a>
            <a className={`list-group-item
                    ${active === 'notifications' ? 'active' : ''}`}>
                Notifications
            </a>
            <a className={`list-group-item
                    ${active === 'messages' ? 'active' : ''}`}>
                Messages
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks' ? 'active' : ''}`}>
                Bookmarks
            </a>
            <a className={`list-group-item
                    ${active === 'lists' ? 'active' : ''}`}>
                Lists
            </a>
            <a className={`list-group-item
                    ${active === 'profile' ? 'active' : ''}`}>
                Profile
            </a>
            <a className={`list-group-item
                    ${active === 'more' ? 'active' : ''}`}>
                More
            </a>
        </div>
    );
};
export default NavigationSidebar;