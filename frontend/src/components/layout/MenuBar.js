import React from 'react';
import { Route, Link } from 'react-router-dom';
import SearchField from './SearchField';
import './MenuBar.css';

const MenuBar = () => {
  return (
    <div>
      <div className="header-blue">
        <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Quint
            </Link>
            <button
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navcol-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navcol-1">
              <ul className="nav navbar-nav">
                <li className="nav-item" role="presentation">
                  <a className="nav-link active" href="#">
                    Link
                  </a>
                </li>
                <li className="dropdown">
                  <a
                    className="dropdown-toggle nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="false"
                    href="#"
                  >
                    Dropdown{' '}
                  </a>
                  <div className="dropdown-menu" role="menu">
                    <a className="dropdown-item" role="presentation" href="#">
                      First Item
                    </a>
                    <a className="dropdown-item" role="presentation" href="#">
                      Second Item
                    </a>
                    <a className="dropdown-item" role="presentation" href="#">
                      Third Item
                    </a>
                  </div>
                </li>
              </ul>
              {/* Search Field */}
              <Route
                render={({ history }) => <SearchField history={history} />}
              />
              <span className="navbar-text mr-2">
                {' '}
                <Link to="/login" className="login">
                  Log In
                </Link>
              </span>
              <Link
                className="btn btn-light action-button"
                role="button"
                to="/register"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MenuBar;
