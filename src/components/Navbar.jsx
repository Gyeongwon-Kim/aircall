import React from 'react';

const Navbar = (props) => {

    function filterActivityFeed(isArchived) {
        props.setArchivedStatus(isArchived);
    }

    return (
        (
        <div className="navbar">
            <button className="nav-box" onClick={() => filterActivityFeed(false)}>Inbox</button>
            <button className="nav-box" onClick={() => filterActivityFeed(true)}>Archived</button>
        </div>
        )
    );
};

export default Navbar;
