  import { Link } from "react-router-dom";
  import useNavLink from "../hooks/NavLinks";



  const NavLinksComponent = () => {
    const { handleLogout, isLoggedIn } = useNavLink();

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
        {isLoggedIn && (
          <button className="btn-logout" onClick={handleLogout}>
            Logout
          </button>
          
          )}
      </div>
    );
  };

  export default NavLinksComponent;
