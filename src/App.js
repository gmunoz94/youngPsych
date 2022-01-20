import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import Services from './pages/Services';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/aboutMe">
          <About />
        </Route>
        <Route exact path="/services">
          <Services />
        </Route>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
