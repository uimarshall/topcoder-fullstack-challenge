import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Header from './components/layout/Header';

import Footer from './components/layout/Footer';

import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Home />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
