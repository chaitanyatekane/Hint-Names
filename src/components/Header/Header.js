import React from 'react';
import './Header.css';

const Header = ({ headerExpanded }) => {
    return (
        <div className="head-container">
            <img src="https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
            className={`head-image ${headerExpanded ? 'head-image-expanded' : 'head-image-contracted'
        }`} 
        alt="coding-hero" />
            <h1 className={`head-text ${headerExpanded ? 'head-text-expanded' : 'head-text-contracted'
        }`}>Hint Names</h1>
        </div>
    );
};

export default Header;