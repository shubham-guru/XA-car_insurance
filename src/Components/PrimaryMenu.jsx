import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";

import "./css/Menu.css";

function PrimaryMenu() {
  const [toggle, setToggle] = useState(false);

  const toggleFunc = () => {
    setToggle(!toggle);
  };

  const li = [
    {
      link: "/",
      text: "Home",
    },
    {
      link: "/about/",
      text: "About us",
    },
    {
      link: "/contact/",
      text: "Contact us",
    },
    {
      link: "/signin/",
      text: "Sign in",
    },
    {
      link: "/getquote/",
      text: "Get Quote",
    }
  ];

  return (
    <>
      <div className="navBar">
        <button className="toggleButton" onClick={toggleFunc}>
          <FaAlignRight />
        </button>
        <ul className={toggle ? "links, show-nav" : "links"}>
          {li.map((objLink, i) => {
            return (
              <li key={i}>
                <NavLink className="anchor" to={objLink.link}>{objLink.text}</NavLink>
              </li>
            );
          })}
          
        </ul>
      </div>

      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Xpress
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/getquote">
                  Get Quote
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </>
  );
}
export default PrimaryMenu;
