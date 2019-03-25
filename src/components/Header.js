import React from 'react';
import {Link,BrowserRouter } from 'react-router-dom';

const Header = (props)=>{
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Streamer
            </Link>
            <div className="right menu">
                <Link to="/" className="item">All stream</Link>
                <Link to="/streams/new" className="item">Log in with Google</Link>
            </div>   
        </div>
    )
}

export default Header;