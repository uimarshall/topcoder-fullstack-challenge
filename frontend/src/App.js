import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import store from './store';
import axios from 'axios';
import { loadLoggedInUser } from './actions/userActions';

// Payment
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import './App.css';
// import Header from './components/layout/Header';

import Footer from './components/layout/Footer';

// import Home from './components/Home';
import ProductDetails from './components/products/ProductDetails';
import MenuBar from './components/layout/MenuBar';
import Login from './components/user/Login';
import Register from './components/user/Register';

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
import Payment from './components/cart/Payment';
import OrderSuccess from './components/cart/OrderSuccess';
import ListOrders from './components/orders/ListOrders';
import OrderDetails from './components/orders/OrderDetails';

function App() {
  const [stripeApiKey, setStripeApiKey] = useState('');
  useEffect(() => {
    store.dispatch(loadLoggedInUser());

    async function getStripApiKey() {
      const { data } = await axios.get('/api/v1/stripeapi');

      setStripeApiKey(data.stripeApiKey);
    }

    getStripApiKey();
  }, []);

  const { user, isAuthenticated, loading } = useSelector((state) => state.auth);

  return (
    <Router>
      <div className="App">
        <MenuBar />
        <Route path="/" component={HomePage} exact />
        <Route path="/search/:keyword" component={HomePage} />
        <Route path="/cart" component={Cart} exact />
        <Route path="/product/:id" component={ProductDetails} exact />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/password/forgot" component={ForgotPassword} exact />
        <Route
          path="/password/reset/:token"
          component={NewPasswordReset}
          exact
        />
        <ProtectedRoute path="/shipping" component={Shipping} exact />

        <ProtectedRoute path="/orders/me" component={ListOrders} exact />
        <ProtectedRoute path="/order/:id" component={OrderDetails} exact />
        <ProtectedRoute path="/order/confirm" component={ConfirmOrder} exact />
        <ProtectedRoute path="/success" component={OrderSuccess} />
        {/* Load stripe API key from backend */}
        {stripeApiKey && (
          <Elements stripe={loadStripe(stripeApiKey)}>
            <ProtectedRoute path="/payment" component={Payment} />
          </Elements>
        )}
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
