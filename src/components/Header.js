import React from 'react';

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
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
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
              <a href="/about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">
                Contact us
              </a>
            </li>
            <li className="nav-item">
              <a href="/test" className="nav-link">
                Test
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <form className="row d-flex justify-content-center form-inline my-2 my-lg-3 mb-3">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-dark my-2 my-sm-0" type="submit">
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
