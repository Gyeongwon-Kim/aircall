import React from 'react';

const Navbar = () => {

    function filterActivityFeed(isArchived) {

    }

    return (
        (
        <div className="navbar">
            <button className="nav-box nav-box-left" onClick={() => filterActivityFeed(false)}>Inbox</button>
            <button className="nav-box nav-box-right" onClick={() => filterActivityFeed(true)}>Archived</button>
        </div>
        )
    );
};

export default Navbar;
