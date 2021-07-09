import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, clearErrors } from '../../actions/userActions';

import MetaData from '../layout/MetaData';
import './Login.css';

const Register = ({ history }) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = user;

  const [avatar, setAvatar] = useState('');
  const [avatarPreview, setAvatarPreview] = useState(
    'assets/img/default_avatar.jpg'
  );

  const alert = useAlert();
  const dispatch = useDispatch();

  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, isAuthenticated, error, history]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set('name', name);
    formData.set('email', email);
    formData.set('password', password);
    formData.set('avatar', avatar);

    dispatch(registerUser(formData));
  };

  const handleChange = (e) => {
    if (e.target.name === 'avatar') {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };
  return (
    <>
      <MetaData title={'Register User'} />
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
                    <h4 className="card-title">Register</h4>
                    <form
                      onSubmit={handleSubmit}
                      encType="multipart/form-data"
                      className="my-login-validation"
                    >
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                          id="name"
                          type="text"
                          className="form-control"
                          name="name"
                          value={name}
                          onChange={handleChange}
                          required
                          autofocus
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="email">E-Mail Address</label>
                        <input
                          id="email"
                          type="email"
                          className="form-control"
                          name="email"
                          value={email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                          id="password"
                          type="password"
                          className="form-control"
                          name="password"
                          value={password}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="avatar_upload">Avatar</label>
                        <div className="d-flex align-items-center">
                          <div>
                            <figure className="avatar mr-3 item-rtl">
                              <img
                                src={avatarPreview}
                                className="rounded-circle"
                                alt="Avatar Preview"
                              />
                            </figure>
                          </div>
                          <div className="custom-file">
                            <input
                              type="file"
                              name="avatar"
                              className="custom-file-input"
                              id="customFile"
                              accept="images/*"
                              onChange={handleChange}
                            />
                            <label
                              className="custom-file-label"
                              htmlFor="customFile"
                            >
                              Choose Avatar
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="custom-checkbox custom-control">
                          <input
                            type="checkbox"
                            name="agree"
                            id="agree"
                            className="custom-control-input"
                            required
                          />
                          <label
                            htmlFor="agree"
                            className="custom-control-label"
                          >
                            I agree to the{' '}
                            <Link className="text-info" to="/terms-condition">
                              Terms and Conditions
                            </Link>
                          </label>
                        </div>
                      </div>

                      <div className="form-group m-0">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                          disabled={loading ? true : false}
                        >
                          Register
                        </button>
                      </div>
                      <div className="mt-4 text-center">
                        Already have an account?{' '}
                        <Link className="text-info" to="/login">
                          Login
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
  );
};

export default Register;
