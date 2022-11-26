import React from "react";
import { NavLink } from "react-router-dom";
import "../css/navigation.css";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark" style={styles.mainnavbar}>
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
                <div class="input-group text-size">
                  <span class="input-group-btn align-self-center">
                    <button type="button" class="btn align-self-center" data-type="minus">
                      <span class="bi bi-plus-circle"></span>
                    </button>
                  </span>
                  <span className="align-self-center">T</span>
                  <span class="input-group-btn align-self-center">
                    <button type="button" class="btn align-self-center" data-type="plus" >
                      <span class="bi bi-dash-circle"></span>
                    </button>
                  </span>
                </div>
                {/* <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink> */}
              </li>
              <li className="nav-item">
                {/* <NavLink className="nav-link" to="/about">
                  About
                </NavLink> */}
                <div class="btn-group">
                  <button className="btn dropdown-toggle languagebtn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    EN
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    ...
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                {/* <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink> */}
                <div class="btn-group">
                  <button className="btn loginBtn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Login
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    ...
                  </ul>
                </div>
              </li>
              <li className="nav-item">

              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/blog">
                  Blog
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
      <nav class="navbar navbar-expand-lg secondnavbar">
        <div class="container">
          <div class="collapse navbar-collapse flex-row-reverse" id="navbarText">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Departments</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Tenders</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">RTI</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About Kolkata</a>
              </li>
              <li class="nav-item">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">More</a>
                <ul className="dropdown-menu dropdown-menu-end">
                  ...
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav class="navbar d-lg-none">
        <button class="navbar-toggler  menubtn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body" >
            <ul class="navbar-nav ">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Departments</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Tenders</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">RTI</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About Kolkata</a>
              </li>
              <li class="nav-item">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">More</a>
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
  mainnavbar: {
    background: "#302BA0",
  }
};
export default Navigation;
