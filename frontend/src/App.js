import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Header from './components/layout/Header';
import Home from './components/Home';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" component={Home} exact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
