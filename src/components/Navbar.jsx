import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";

import { Container } from "../components";
import { logo } from "../assets/images";

import { unAuthenticatedNavbarStyles as styles } from "../styles/";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen((open) => !open);
  };

  const handleCloseNav = () => {
    setNavOpen(false);
  };

  return (
    <Container>
      <nav className="relative flex justify-between items-center">
        <div className="lg:flex-1">
          <img src={logo} alt="Logo" className="h-[40px]" />
        </div>
        <div
          className={`lg:flex-[3] ${styles["submenu"]} ${
            navOpen ? styles["open"] : ""
          }`}
        >
          {/* Nav Items */}
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${styles["navlink"]} ${styles["active"]}`
              }
            >
              Find Labourman
            </NavLink>
            <NavLink
              to="/"
              className={({ isActive }) => `${styles["navlink"]}`}
            >
              About
            </NavLink>
            <div className={`${styles["dropdown"]}`}>
              <p
                className={`${styles["navlink"]} ${styles["dropdown__dropdown-link"]}`}
              >
                Service Type{" "}
                <HiChevronDown
                  className={`${styles["dropdown__dropdown-icon"]}`}
                />
              </p>
              <div
                className={`lg:bg-white lg:border lg:shadow-md lg:rounded-sm my-1 ${styles["drop__dropdown-content"]}`}
              >
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${styles["drop__dropdown-link"]}`
                  }
                >
                  Service 1
                </NavLink>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${styles["drop__dropdown-link"]}`
                  }
                >
                  Service 2
                </NavLink>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${styles["drop__dropdown-link"]}`
                  }
                >
                  Service 3
                </NavLink>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${styles["drop__dropdown-link"]}`
                  }
                >
                  Service 3
                </NavLink>
              </div>
            </div>
            <NavLink
              to="/"
              className={({ isActive }) => `${styles["navlink"]}`}
            >
              Notification
            </NavLink>
            <NavLink
              to="/"
              className={({ isActive }) => `${styles["navlink"]}`}
            >
              Contact Us
            </NavLink>
          </div>
          {/* End of Nav Items */}
          {/* Authentication Buttons */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-2 lg:gap-6">
            <NavLink
              to="/"
              className={({ isActive }) => `${styles["navlink"]}`}
            >
              Sign Up
            </NavLink>
            <NavLink to="/">
              <button
                className={`py-2 w-[250px] lg:w-auto px-8 text-center border bg-white text-pink-600 lg:border-pink-300 rounded-md lg:bg-pink-500 lg:text-white active-ring active:ring-white lg:active:ring-pink-500 duration-200 active:scale-90 hover:opacity-60 hover:scale-[97%]`}
              >
                Login
              </button>
            </NavLink>
          </div>
          {/* End of Authentication Buttons */}
          {/* Hamburger Menu */}
        </div>
        <div className="lg:hidden">
          {navOpen ? (
            <FaTimes
              className="text-pink-600 text-lg absolute right-0 top-[50%] translate-y-[-50%] active:scale-50 active:opacity-60 duration-300"
              onClick={handleNavToggle}
            />
          ) : (
            <FaBars
              className="text-pink-600 absolute text-lg right-0 top-[50%] translate-y-[-50%] active:scale-50 active:opacity-60 duration-300"
              onClick={handleNavToggle}
            />
          )}
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
