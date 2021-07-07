import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import './App.css';
// import Header from './components/layout/Header';

import Footer from './components/layout/Footer';

import Home from './components/Home';
import ProductDetails from './components/products/ProductDetails';
import MenuBar from './components/layout/MenuBar';
import Login from './components/user/Login';
import Register from './components/user/Register';
import store from './store';
import { loadLoggedInUser } from './actions/userActions';
import Profile from './components/user/Profile';
import ProtectedRoute from './components/route/ProtectedRoute';

function App() {
  useEffect(() => {
    store.dispatch(loadLoggedInUser());
  }, []);
  return (
    <Router>
      <div className="App">
        <MenuBar />

        <Route path="/" exact component={Home} />
        <Route path="/search/:keyword" component={Home} />
        <Route path="/product/:productId" exact component={ProductDetails} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <ProtectedRoute path="/me" component={Profile} exact />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
