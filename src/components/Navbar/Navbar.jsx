import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import navImage from "../../images/Navbar/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link to="/">
            <img src={navImage} alt="logo" className="navbar-brand" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="#"
                  onClick={() =>
                    window.open(
                      "https://ingrownorganics.com/products/south-of-france-bar-soap-green-tea-1x6-oz?_pos=16&_sid=e2e9f1829&_ss=r",
                      "_self"
                    )
                  }
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="#"
                  onClick={() =>
                    window.open("https://market.selfplatform.io/", "_self")
                  }
                >
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#selfApp">
                  SELF App
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#selfPay">
                  SELF Pay
                </a>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="#"
                  onClick={() =>
                    window.open(
                      "https://ingrownorganics.com/products/mirror-image%E2%84%A2",
                      "_self"
                    )
                  }
                >
                  Create Mirror Image
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Help
                </Link>
              </li>
            </ul>

            {/* <div className="d-flex ms-auto searchBox">
              <div className="input-group">
                <span
                  className="input-group-text searchIconBtn"
                  id="basic-addon1"
                >
                  <i className="fas fa-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search store"
                />
              </div>
            </div> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
