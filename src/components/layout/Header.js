import React from "react";
import Prototypes from "prop-types";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { branding } = props;

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0 mr-auto">
      <div>
        <div className="container">
          <a href="/" className="navbar-brand">
            {branding}
          </a>

          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="fas fa-home">Home</i>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact/add" className="nav-link">
                  <i className="fas fa-plus"> Add</i>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  <i className="fas fa-question"> About</i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "My App",
};

Header.propTypes = {
  branding: Prototypes.string.isRequired,
};

export default Header;