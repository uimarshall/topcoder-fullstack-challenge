import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import './App.css';
// import Header from './components/layout/Header';

import Footer from './components/layout/Footer';

// import Home from './components/Home';
import ProductDetails from './components/products/ProductDetails';
import MenuBar from './components/layout/MenuBar';
import Login from './components/user/Login';
import Register from './components/user/Register';
import store from './store';
import { loadLoggedInUser } from './actions/userActions';
import Profile from './components/user/Profile';
import ProtectedRoute from './components/route/ProtectedRoute';
import UpdateProfile from './components/user/UpdateProfile';
import UpdatePassword from './components/user/UpdatePassword';
import ForgotPassword from './components/user/ForgotPassword';
import NewPasswordReset from './components/user/NewPasswordReset';
import HomePage from './components/HomePage';
import Cart from './components/cart/Cart';
import Shipping from './components/cart/Shipping';
import ConfirmOrder from './components/cart/ConfirmOrder';

function App() {
  useEffect(() => {
    store.dispatch(loadLoggedInUser());
  }, []);
  return (
    <Router>
      <div className="App">
        <MenuBar />

        <Route path="/" component={HomePage} exact />
        <Route path="/search/:keyword" component={HomePage} />
        <Route path="/cart" component={Cart} exact />
        <Route path="/products/:id" component={ProductDetails} exact />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/password/forgot" component={ForgotPassword} exact />
        <Route
          path="/password/reset/:token"
          component={NewPasswordReset}
          exact
        />
        <ProtectedRoute path="/shipping" component={Shipping} exact />
        <ProtectedRoute path="/order/confirm" component={ConfirmOrder} exact />
        <ProtectedRoute path="/me" component={Profile} exact />
        <ProtectedRoute path="/me/update" component={UpdateProfile} exact />
        <ProtectedRoute
          path="/password/update"
          component={UpdatePassword}
          exact
        />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
