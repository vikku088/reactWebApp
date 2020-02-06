import React from 'react';
const Nav = () =>{
    return (
        <nav className = "nav-wrapper red darken-3">
            <div className = "conatiner">
                <a href = "" className = "brand-logo">Web Page</a>
                <ul className = "right">
                    <li><a href = "/">Home</a></li>
                    <li><a href = "/about">About</a></li>
                    <li><a href = "/contact">Contact</a></li>
                </ul>
            </div>

        </nav>
    )
}
export default Nav;