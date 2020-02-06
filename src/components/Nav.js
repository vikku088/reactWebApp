import React from 'react';
import {Link, NavLink} from 'react-router-dom';
const Nav = () =>{
    return (
        <nav className = "nav-wrapper red darken-3">
            <div className = "conatiner">
                <a href = "" className = "brand-logo">Web Page</a>
                <ul className = "right">
                    <li><NavLink to = "/">Home</NavLink></li>
                    <li><NavLink to = "/about">About</NavLink></li>
                    <li><NavLink to = "/contact">Contact</NavLink></li>
                </ul>
            </div>

        </nav>
    )
}
export default Nav;