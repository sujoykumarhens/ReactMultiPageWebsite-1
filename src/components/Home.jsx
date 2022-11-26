import React from "react";
import "../css/home.css";


function Home() {
  return (
    <div className="home">
      <div id="kmccarousel" className="carousel  carousel-fade" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#kmccarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#kmccarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#kmccarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="100000">
            <img src="../assets/kmc.png" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block welcometo">
              <div className="row">
                <div className="col-lg-7 overflow-hidden">
                  <h3 className="welcometoh5">Welcome to </h3>
                  <h1 className="kmcname">
                    Kolkata Municipal<br />
                    Corporation (KMC)
                  </h1>
                </div>
                <div className="col-lg-5">
                  <div className="notificationPanel">
                    <div class="card initiativesCard">
                      <div class="card-body">
                        <span className="small text-dark float-end">
                          <a href="dashboard" target="_blank" className="small">Know More</a>
                        </span>
                        <h5 className="initiativesCardheader">Initiatives by KMC</h5>
                        <ul className="list-group list-group-numbered">
                          <li><a href="dashboard" target="_blank"> List of mega centres under KMC for super spreaders of 18-44 age group</a></li>
                          <li><a href="dashboard" target="_blank"> List of COVISHIELD centres running under KMC</a></li>
                          <li><a href="dashboard" target="_blank"> List of COVAXIN centres running under KMC</a></li>
                          <li><a href="dashboard" target="_blank"> 2nd dose vaccination for foreign going beneficiaries</a></li>
                          <li><a href="dashboard" target="_blank"> List of COVAXIN centres running under KMC</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="../assets/kmc.png" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="../assets/kmc.png" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#kmccarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </div>
  );
}

export default Home;
