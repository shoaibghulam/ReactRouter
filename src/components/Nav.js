import React from 'react';
import {Link} from 'react-router-dom';
const Nav =()=>{
    return(
        <nav>
            <ul className="nav-link">
            <Link to="/">
            <li>Home</li>
            </Link>  
            <Link to="/games">
            <li>Games</li>
            </Link>  
            <Link to="/softwares">
            <li>Software</li>
            </Link>

            <Link to="/gallery">
            <li>Gallery</li>
            </Link>
           <Link to="/about">
           <li>About</li>
           </Link>
            
            </ul>
        </nav>
    )
}
export default Nav;
