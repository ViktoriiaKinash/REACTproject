import React, { useState } from "react"; 
import { Link } from "react-router-dom"; 
import "./NavBar.scss"; 
 
const NavBar = () => { 
    const [isMobile, setIsMobile] = useState(false);
  return ( 
    <nav className="navbar"> 
      <h3 className="Logo">Selling configuration</h3> 
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() =>
        setIsMobile(false)}
      > 
        <Link to="/campaigns" className="campaigns"> 
          <li>Campaign</li> 
        </Link> 
        <Link to="/products" className="products"> 
          <li>Products</li> 
        </Link> 
      </ul>
      <button className="mobile-menu-icon"
      onClick={() =>
        setIsMobile(!isMobile)
      }>
        {isMobile ? 
        (<i className="mobileButtonMenu">Close</i>) 
        : (<i className="mobileButtonMenu">Menu</i>)}
    </button> 
    </nav> 
  ); 
}; 
 
export default NavBar;