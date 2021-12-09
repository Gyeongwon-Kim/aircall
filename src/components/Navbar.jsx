import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const dispatch = useDispatch();

    return (
        (
        <div className="navbar">
            <button className="nav-box nav-box-left no-underline" onClick={() => dispatch({type: 'reverse'})}>Inbox</button>
            <button className="nav-box nav-box-right no-underline" onClick={() => dispatch({type: 'reverse'})}>Archived</button>
        </div>
        )
    );
};

export default Navbar;
