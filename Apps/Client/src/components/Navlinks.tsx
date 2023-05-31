import axios from "axios";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import "../css/Pages.css";


const NavLinksComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

   const handleLogout = () => {
     localStorage.removeItem("token");
     localStorage.removeItem("loggedIn");

     setIsLoggedIn(false);
    window.location.href = "/"; 
   };
 const token = localStorage.getItem("token");
 const loggedIn = localStorage.getItem("loggedIn");
 if (token && loggedIn && !isLoggedIn) {
   setIsLoggedIn(true);
 }
    return (
      <div className="nav-links">
        <div className="nav-left">Test</div>
        <div className="nav-right">
          <>
            <div className="link-nav">
              <Link to="/" className="hover-link">
                Home
              </Link>
            </div>
            <div className="link-nav">
              <Link to="/register" className="hover-link">
                Register
              </Link>
            </div>
          </>
        </div>
        {isLoggedIn && <button className="btn-logout" onClick={handleLogout}>Logout</button>}
      </div>
    );
};

export default NavLinksComponent;
