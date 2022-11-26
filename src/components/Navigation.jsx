import React from "react";
import { NavLink } from "react-router-dom";
import "../css/navigation.css";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand mainnavbar">
        <div className="container" style={styles.firstrow}>
          <NavLink className="navbar-brand" to="/">
            <object
              data="../assets/logo.png"
              type="image/png"
              className="logo"
            >
              <img
                src="../assets/logo.png"
                onerror="this.src='../assets/whitelogo.png'"
                alt="KMC logo"
              />
            </object>
          </NavLink>
          <form action="https://www.google.com/search" method="get" className="search-bar shadow-sm" traget="_blank">
            <button type="submit">  <i className="bi bi-search"></i></button>
            <input type="text" placeholder="Search products" name="q" />
          </form>
          <div className="w-100 " id="navbarScroll">
            <ul className="navbar-nav float-end">
              <li className="nav-item">
                <div className="input-group text-size">
                  <span className="input-group-btn align-self-center">
                    <button type="button" className="btn align-self-center" data-type="minus">
                      <span className="bi bi-plus-circle"></span>
                    </button>
                  </span>
                  <span className="align-self-center">T</span>
                  <span className="input-group-btn align-self-center">
                    <button type="button" className="btn align-self-center" data-type="plus" >
                      <span className="bi bi-dash-circle"></span>
                    </button>
                  </span>
                </div>
              </li>
              <li className="nav-item">
                {/* <NavLink className="nav-link" to="/about">
                  About
                </NavLink> */}
                <div className="btn-group">
                  <button className="btn dropdown-toggle languagebtn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    EN
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    ...
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <div className="btn-group">
                  <button className="btn loginBtn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Login
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    ...
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg secondnavbar">
        <div className="container">
          <div className="collapse navbar-collapse flex-row-reverse" id="navbarText">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="dashboard">About</NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Departments</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Tenders</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">RTI</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About Kolkata</a>
              </li>
              <li className="nav-item">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">More</a>
                <ul className="dropdown-menu dropdown-menu-end">
                  ...
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="navbar d-lg-none hiddennavbar">
        <button className="navbar-toggler  menubtn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body" >
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="dashboard">About</NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Departments</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Tenders</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">RTI</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About Kolkata</a>
              </li>
              <li className="nav-item">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">More</a>
                <ul className="dropdown-menu dropdown-menu-end">
                  ...
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div >
  );

}
const styles = {
  firstrow: {
    height: "50px",
    overflow: "visible",
    justifyContent: "start"
  },
};
export default Navigation;
