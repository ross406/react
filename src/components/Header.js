import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
        <div className="container">
          <a href="/" className="navbar-brand">
            Ross's website
          </a>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link ml-5">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle ml-5"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Categories
              </a>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link ml-5">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link ml-5">
                Contact us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/test" className="nav-link ml-5">
                Test
              </Link>
            </li>
            <li className="nav-item ml-5">
              <Link to="/signup">
                <button type="button" class="btn btn-primary ">
                  <i class="fa fa-camera mr-2"></i>
                  SELL
                </button>
              </Link>
            </li>
            <li className="nav-item ml-5">
              <Link to="/signup">
                <button type="button" class="btn btn-success ">
                  Sign Up
                </button>
              </Link>
            </li>
            <li className="nav-item ml-2">
              <Link to="/login">
                <button type="button" class="btn btn-success ">
                  Log In
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <form className=" container row justify-content-center ml-5">
        <div className="col-sm-10">
          <input
            className="form-control"
            type="search"
            placeholder="Search Products.."
            aria-label="Search"
          />
        </div>
        <button className="btn btn-dark my-2 my-sm-0 " type="submit">
          <i class="fa fa-search mr-2"></i>
          Search
        </button>
      </form>
      {/* <div
        className="alert alert-danger alert-dismissible fade show"
        role="alert"
      >
        <h1>{props.branding}</h1>

        <strong>
          Hello everyone my name is Roshan Sharma and this is my website.
        </strong>
        <p>I have created this website using React.js</p>
      </div> */}
    </div>
  );
};

export default Header;
