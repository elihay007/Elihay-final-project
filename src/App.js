
import './App.css';
// import "./Top.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React  from 'react';


import Home from "./Pages/Home" ;
import About from "./Pages/About";
import Contact from "./Pages/Contact" ;
import Courses_And_Academy from "./Pages/Courses_And_Academy" ;  
import Protfolio_career from "./Pages/Protfolio_career" ;
import Footer from "./Pages/Footer";
import Top from "./Pages/Top";




function App() {
  return (

    <Router>
    <div className="App" >
    
       <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact </Link>
        <Link to="/Courses_And_Academy">Courses And Academy</Link>
        <Link to="/Protfolio_career">Protfolio_career</Link>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/About">         
            <About />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
          <Route exact path="/Courses_And_Academy">
            <Courses_And_Academy />
          </Route>
          <Route exact path="/Protfolio_career">
            <Protfolio_career />
          </Route>
        </Switch>

        {/* <Top /> */}
        
        <img src= "Support.png"  />
        

        

      {/* <header className="App-header">    
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://one.co.il"
          target="_blank"
          rel="noopener noreferrer"
        >
          One
        </a>
      </header> */}
      <Footer />
    </div>
    </Router>
  );
}

export default App;
