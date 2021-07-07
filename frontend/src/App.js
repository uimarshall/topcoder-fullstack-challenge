import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
// import Header from './components/layout/Header';

import Footer from './components/layout/Footer';

import Home from './components/Home';
import ProductDetails from './components/products/ProductDetails';
import MenuBar from './components/layout/MenuBar';
import Login from './components/user/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <MenuBar />

        <Route path="/" exact component={Home}></Route>
        <Route path="/search/:keyword" component={Home}></Route>
        <Route
          path="/product/:productId"
          exact
          component={ProductDetails}
        ></Route>
        <Route path="/login" exact component={Login}></Route>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
