import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      // Close the navbar when the window is resized //
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts //
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
            <img src="../src/assets/logo.png" alt="logo" height={40}/>
          <div className={`navbar-links ${isOpen ? "active" : ""}`}>
            <Link to="/">Home</Link>
            <Link to="/battleLog">Battle Logs</Link>
            <Link to="/leaderboard">Leaderboard</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
