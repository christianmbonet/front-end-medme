import logo from './logo.svg';
import './App.css';
import SignUp from "./components/SignUp/SignUp"
import {BrowserRouter as Router, Route, Link} from "react-router-dom"

function App() {
  return (
      <div>
        <h1>
          <Router>
          <SignUp/>
          </Router>
        </h1>
      </div>
  );
}

export default App;
