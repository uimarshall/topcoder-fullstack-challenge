import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
// import Header from './components/layout/Header';

import Footer from './components/layout/Footer';

import Home from './components/Home';
import ProductDetails from './components/products/ProductDetails';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}

        <Route path="/" exact component={Home}></Route>
        <Route path="/:productId" exact component={ProductDetails}></Route>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
