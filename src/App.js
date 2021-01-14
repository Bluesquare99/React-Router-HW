import React from 'react';
import ReactDOM from 'react-dom';
// import './App.css';
import { Alien } from './components/alien';
import {
  BrowserRouter as Router, // we are aliasing this module for a cleaner call
  Route,
  Link
  // etc.
} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

class App extends React.Component {
  render(){
    return (
      <Router>
      <div>
          <Link to="/alien" target="_blank"><h3 style={{"font-family" : "sans-serif"}}>What's green and speaks a funny language?</h3></Link>
          {/* <Route name="Home" exact path="/" component={App}/> */}
          <Route name="Alien" exact path="/alien" component={Alien}/>
      </div>
      </Router>
    );
  };
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Create link to Alien from App using
// 1. Import Route and Router
// 2. Place those in 

// Edit contents of App component
// Create another class component that is called in App
//  Name component Alien
//  Export additional component to App

