import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';

import './Login.css';
import Loader from '../shared/Loader';
import MetaData from '../layout/MetaData';
import { loginUser, clearErrors } from '../../actions/userActions';
const Login = ({ history, location }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const alert = useAlert();
  const dispatch = useDispatch();

  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (isAuthenticated) {
      history.push(redirect);
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, isAuthenticated, error, history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={'Login'} />
          <div className="my-login-page">
            <section className="h-100">
              <div className="container h-100">
                <div className="row justify-content-md-center h-100">
                  <div className="card-wrapper">
                    <div className="brand">
                      <img src="assets/img/default_avatar.jpg" alt="avatar" />
                    </div>
                    <div className="card fat">
                      <div className="card-body">
                        <h4 className="card-title">Login</h4>
                        <form
                          onSubmit={handleSubmit}
                          className="my-login-validation"
                        >
                          <div className="form-group">
                            <label htmlFor="email">E-Mail Address</label>
                            <input
                              id="email"
                              type="email"
                              className="form-control"
                              name="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                              autofocus
                            />
                          </div>

                          <div className="form-group">
                            <label htmlFor="password">
                              Password
                              <Link
                                to="/password/forgot"
                                className="float-right text-primary"
                              >
                                Forgot Password?
                              </Link>
                            </label>
                            <input
                              id="password"
                              type="password"
                              className="form-control"
                              name="password"
                              required
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>

                          <div className="form-group">
                            <div className="custom-checkbox custom-control">
                              <input
                                type="checkbox"
                                name="remember"
                                id="remember"
                                className="custom-control-input"
                              />
                              <label
                                htmlFor="remember"
                                className="custom-control-label"
                              >
                                Remember Me
                              </label>
                            </div>
                          </div>

                          <div className="form-group m-0">
                            <button
                              type="submit"
                              className="btn btn-primary btn-block"
                            >
                              Login
                            </button>
                          </div>
                          <div className="mt-4 text-center">
                            Don't have an account?{' '}
                            <Link className="text-info" to="/register">
                              Create One
                            </Link>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      )}
    </>
  );
};

export default Login;
