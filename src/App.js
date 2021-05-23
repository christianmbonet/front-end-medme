import logo from './logo.svg';
import SignUp from "./components/SignUp/SignUp"
import SignIn from "./components/SignIn/SignIn"
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"
import Navigation from './components/Nav/Navigation'
import './App.css'
import navbar from './components/Nav/Navigation'

function App() {
  return (
      <div>
        <h1>
          <Router>
            <Switch>
              <Route exact path="/signup" component={SignUp}/>
              <Route exact path="/" component={SignIn}/>
              <Route exact path="/navbar" component={Navigation}/>
            </Switch>
          </Router>
        </h1>
      </div>
  );
}

export default App;
