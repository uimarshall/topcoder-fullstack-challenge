import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { Route, Link } from 'react-router-dom';
import SearchField from './SearchField';
import './MenuBar.css';
import { logoutUser } from '../../actions/userActions';

const MenuBar = () => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { user, loading } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  const logoutHandler = () => {
    dispatch(logoutUser());
    alert.success('Logged out successfully.');
  };
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
              <Link to="/cart" style={{ textDecoration: 'none' }}>
                {' '}
                <span className="mx-2" id="cart">
                  Cart
                </span>
                <span className="mr-2" id="cart_count">
                  {cartItems.length}
                </span>
              </Link>

              {user ? (
                <div className="ml-4 dropdown d-inline">
                  <Link
                    to="#!"
                    className="btn dropdown-toggle text-white mr-4"
                    type="button"
                    id="dropDownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <figure className="avatar avatar-nav">
                      <img
                        src={user.avatar && user.avatar.url}
                        alt={user && user.name}
                        className="rounded-circle"
                      />
                    </figure>
                    <span>{user && user.name}</span>
                  </Link>

                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropDownMenuButton"
                  >
                    {user && user.role === 'admin' && (
                      <Link className="dropdown-item" to="/dashboard">
                        Dashboard
                      </Link>
                    )}
                    <Link className="dropdown-item" to="/orders/me">
                      Orders
                    </Link>
                    <Link className="dropdown-item" to="/me">
                      Profile
                    </Link>
                    <Link
                      className="dropdown-item text-danger"
                      to="/"
                      onClick={logoutHandler}
                    >
                      Logout
                    </Link>
                  </div>
                </div>
              ) : (
                !loading && (
                  <>
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
                  </>
                )
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MenuBar;
