import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
