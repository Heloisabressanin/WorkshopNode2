import axios from "axios";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import "../css/Pages.css";


const NavLinksComponent = () => {


    return (
        <div className="nav-links">
            <div className="nav-left">
Test
            </div>
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
        </div>
    );
};

export default NavLinksComponent;
