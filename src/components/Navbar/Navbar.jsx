import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png"; // Assuming you have a logo image in the assets folder
import { logout } from "../../firebase";

const Navbar = () => {
  const navRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    });
  }, []);

  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img
          src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
          alt=""
        />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>News & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <i class="fa-solid fa-magnifying-glass"></i>
        <p>Children</p>
        <i class="fa-solid fa-bell"></i>
        <div className="navbar-profile">
          <img src="" alt="" className="profile" />
          <i class="fa-solid fa-caret-down"></i>
          <div className="dropdown">
            <p
              onClick={() => {
                logout();
              }}
            >
              Sign Out of Netflix
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
