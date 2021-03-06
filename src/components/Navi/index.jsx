import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Navi = ({ location, title }) => (
  <nav className="navbar navbar-expand navbar-dark flex-column flex-md-row bg-primary">
    <div className="container">
      <Link className="text-center" to="/">
        <h1 className="navbar-brand mb-0">{title}</h1>
      </Link>
      <div className="navbar-nav-scroll">
        <ul className="navbar-nav bd-navbar-nav flex-row">
          <li
            className={
              location.pathname === '/' ? 'nav-item active' : 'nav-item'
            }
          >
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li
            className={
              location.pathname === '/profile/' ? 'nav-item active' : 'nav-item'
            }
          >
            <Link to="/profile/" className="nav-link">
              Profile
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex" />
    </div>
  </nav>
);

Navi.propTypes = {
  location: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default Navi;
