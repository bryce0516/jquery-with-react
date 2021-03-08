
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Users from './components/Users'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/about" component={About}>
                <About />
              </Route>
              <Route path="/users" component={Users}>
                <Users />
              </Route>
              <Route exact path="/" component={Home}>
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>

      </header>
    </div>
  );
}

export default App;
