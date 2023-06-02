import { useState } from "react";
import "../css/Pages.css";

const useNavLink = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    //localStorage.removeItem("token");
    localStorage.removeItem("loggedIn");
    setIsLoggedIn(false);
    window.location.href = "/";
  };
  //const token = localStorage.getItem("token");
  const loggedIn = localStorage.getItem("loggedIn");
  if (loggedIn && !isLoggedIn) {
    setIsLoggedIn(true);
  }
  return {
    handleLogout,
    isLoggedIn,
  };
};

export default useNavLink;
