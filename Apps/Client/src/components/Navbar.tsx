import { useState } from "react";
import "../css/Pages.css";
import NavLinksComponent from "./Navlinks";

const Navbar = () => {
  const [Scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <div id="Fragment">
        <NavLinksComponent />
      </div>
    </>
  );
};

export default Navbar;
