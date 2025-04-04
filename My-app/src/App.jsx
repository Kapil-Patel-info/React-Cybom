import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style.css";
import img3 from "./images/img3.jpg";
import img2 from "./images/img2.jpg";
import img1 from "./images/img1.jpg";
import sc1 from "./images/sc1.png";
import sc2 from "./images/sc2.png";
import sc3 from "./images/sc3.png";
import insta from "./images/instagram.png";

import tech1 from "./images/tech1.jpg";
import tech2 from "./images/tech2.jpg";
import tech3 from "./images/tech3.jpg";
import apple from "./images/apple.jpg"


const App = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-md navbar-light bg-primary p-2"
        data-bs-theme="dark"
      >
        <a className="navbar-brand" href="#">
          K
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul
            className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style={{ "--bs-scroll-height": "100px" }}
          >
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Skills
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    MERN Stack
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Java
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    C++
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>

       <div id="carouselExample" className="carousel slide">   {/* {//slides } */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={apple}
              height={"400px"}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={img2}
              height={"400px"}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={img1}
              height={"400px"}
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container-fluid">
        <div className="row justify-content-evenly ">
          <div className="col-md-3 col-sm-6 p-2 social">
            <div className="card p-2 m-2" style={{ width: "100%" }}>
              <img
                src={sc1}
                className="card-img-top"
                alt="LinkedIn Screenshot"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">LinkedIn</h5>
                <p className="card-text">
                  A professional networking platform that connects job seekers
                  and recruiters.
                </p>
                <a
                  href="https://github.com/Kapil-Patel-info/Thekapilpatel"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 p-2 social">
            <div className="card p-2 m-2" style={{ width: "100%" }}>
              <img
                src={sc2}
                className="card-img-top"
                alt="GitHub Screenshot"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">GitHub</h5>
                <p className="card-text">
                  Showcase your projects, collaborate with others, and build a
                  strong developer profile.
                </p>
                <a
                  href="https://github.com/Kapil-Patel-info"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 p-2 social">
            <div className="card p-2 m-2" style={{ width: "100%" }}>
              <img
                src={insta}
                className="card-img-top"
                alt="Instagram Profile"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Kapil Patel</h5>
                <p className="card-text">
                  Full-stack developer | Car enthusiast | Exploring tech &
                  travel. 🚀 Follow my journey!
                </p>
                <a
                  href="https://www.instagram.com/thekapilpatel_"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Profile
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 p-2 social">
            <div className="card p-2 m-2" style={{ width: "100%" }}>
              <img
                src={sc3}
                className="card-img-top"
                alt="Wonderlust Screenshot"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Wonderlust</h5>
                <p className="card-text">
                  A tourism website that helps users explore travel destinations
                  with maps and guides.
                </p>
                <a
                  href="https://wonderlust-13hd.onrender.com/listings"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>



      
    </>
  );
};

export default App;
